

/* catergories model

I have created structure as each document will have particular category and array of products related to that category

*/
const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const categories = new Schema({
    categoryName: {
        type: String
    },
    products: [{
        product_name: {
            type: String
        },
        price: {
            type: Number
        }
    }]
})

exports.Categories = mongoose.model("Categories", categories, "categories")
