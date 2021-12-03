const Category = require("../models/category")

exports.getCategoryById = (req, res, next, id)=>{
    Category.findById(id).exec((err, cate) => {
        if (err) {
           return res.status(400).json({
               err: "category not found in DB"
           }) 
        }
        req.category = cate;
        next()
    })
}

exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, cate) => {
        if (err) {
            return res.status(400).json({
                err: "not able to save category in DB"
            }) 
         }
         res.json({cate})
    })
}

exports.getCategory = (req, res) => {
    return res.json(req.category)
}
exports.getAllCategory = (req, res, next) => {
    Category.find().exec((err, categories) => {
        if (err) {
            return res.status(400).json({
                err: "no categories found"
            }) 
         }
         res.json( categories )
         next()
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category
    category.name = req.body.name;
    category.save((err, updatedCategory) => {
        if (err) {
            return res.status(400).json({
                err: "failed to update"
            }) 
        }
        res.json( updatedCategory )
    })
}

exports.removeCategory = (req, res) => {
    const category = req.category

    category.remove( (err, category) => {
        if (err) {
            return res.status(400).json({
                err: "failed to del. category"
            }) 
        }
        res.json({
            message : `${category.name} category deleted successfully`
        } )
    } )
}