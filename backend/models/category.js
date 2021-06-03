const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        maxLength: 32,
        unique: true

    }
},
{timestamps: true}
)

module.exports = mongoose.model("Category", categorySchema)