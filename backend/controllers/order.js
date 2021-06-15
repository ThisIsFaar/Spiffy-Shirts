const { Order, ProductCart } = require("../models/order");

exports.getOrderById = (req, res, next, id) => {
  Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "no order in db",
        });
      }
      req.order = order;
      next();
    });
};
exports.createOrder = (req, res) => {
  req.body.order.user = req.profile;
  const order = new Order(req.body.order);
  order.save((err, order) => {
    if (err) {
      return res.status(400).json({
        error: "failes to save order in db",
      });
    }
    res.json(order);
  });
};

exports.getAllOrders = (req, res) => {
  userId = req.profile._id;
  Order.find({ user: userId })
    .populate("name", "_id")
    .exec((err, order) => {
      if (err) {
        return res.status(400).json({
          error: "no orders yet",
        });
      }
      res.json(order);
    });
};

exports.getOrderStatus = (req, res) => {
  res.json(Order.schema.path("status").enumValues);
};
exports.updateStatus = (req, res) => {
  Order.update(
    { _id: req.body.orderId },
    { $set: { status: req.body.status } },
    (err, order) => {
      if (err) {
        return res.status(400).json({
          error: "cannot updates status",
        });
      }
      res.json(order);
    }
  );
};
