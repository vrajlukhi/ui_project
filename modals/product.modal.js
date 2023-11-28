const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title : String,
    desc : String,
    duedate : String,
    response : String
})

const proModel = mongoose.model("product" , productSchema)

module.exports = proModel