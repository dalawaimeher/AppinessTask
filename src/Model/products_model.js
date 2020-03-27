
/* products model

I have created structure as each document will have details of product, price and category that belongs to

*/

const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const products = new Schema({

    product_name: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    }
})

exports.Products = mongoose.model("Products", products, "products")

