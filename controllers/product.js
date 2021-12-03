const Products = require("../models/product");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getProductById = (req, res, next, id) => {
  Products.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          err: "product not found ",
        });
      }
      req.product = product;
      next();
    });
};
exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with your file",
      });
    }

    //desturcture the fields
    const { name, description, price, stock, category } = fields;

    if (!name || !description || !price || !stock || !category) {
      return res.status(400).json({
        error: "all fields are mandatory, please include",
      });
    }

    //TODO restrictions on fields
    let product = new Products(fields);

    //handling files
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file size too big!",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //save to db
    product.save((err, product) => {
      if (err) {
        return res.json({
          error: "saving t's in db failed",
        });
      }
      res.json(product);
    });
  });
};
exports.getProduct = (req, res) => {
  //req.product.photo = undefined;
  return res.json(req.product);
};

//middleware
exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType);
    return res.send(req.product.photo.data);
  }
  next();
};
exports.deleteProduct = (req, res) => {
  let product = req.product;
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: "failed to delete the product",
      });
    }
    res.json({
      message: `${deletedProduct.name} product is successfully deleted`,
    });
  });
};
exports.updateProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with your file",
      });
    }

    //updation code
    let product = req.product;
    product = _.extend(product, fields);
    //handling files
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file size too big!",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.path);
      product.photo.contentType = file.photo.type;
    }

    //save to db
    product.save((err, product) => {
      if (err) {
        return res.json({
          error: "Updatiion failed",
        });
      }
      res.json(product);
    });
  });
};

//product listing
exports.getAllProducts = (req, res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id";
  Products.find()
    .select("-photo")
    .populate("category")
    .sort([[sortBy, "asc"]])
    .limit(limit)
    .exec((err, products) => {
      if (err) {
        return res.status(400).json({
          error: "no product found, sorry darlin",
        });
      }
      res.json(products);
    });
};

exports.getAllUniqueCategories = (req, res) => {
  Products.distinct("category", {}, (err, category) => {
    if (err) {
      return res.status(400).json({
        error: "no category found , sorry darlin",
      });
    }
    res.json(category);
  });
};

exports.updateStock = (req, res, next) => {
  let myOperations = req.body.order.products.map((prod) => {
    return {
      updateOne: {
        filter: { _id: prod._id },
        update: { $inc: { $stock: -prod.count, sold: +prod.count } },
      },
    };
  });

  Products.bulkWrite(myOperations, {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: "Bulk operation failed",
      });
    }
    next();
  });
};
