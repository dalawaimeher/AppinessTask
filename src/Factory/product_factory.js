
/**
 * here comes the business logic
 * 
 */

const Response = require('src/utils/Response'),
    Products = require('src/Model/products_model'),
    Categories = require('src/Model/categories_model')


exports.getProducts = async (request, reply) => {
    try {

        const categoryName = request.query.categoryName;

        /*
        condition to pass for db
        i have used spread operator so if no category name is passed it will check if categoryName exists or not and returns all the data, if category name is given then other condition will be added
             */
        const condition = {
            categoryName: { '$exists': true },
            ...categoryName && {
                categoryName: categoryName
            }
        };

        const dbResult = await Categories.Categories.find(condition)

        if (condition) {
            reply(Response.sendResponse(true, dbResult));
        }else {
            reply(Response.sendResponse(true, 'NO DATA'));
        }
    } catch (err) {
        reply(Response.sendResponse(false, err));
    }

};
