/**
 *  Controller - this shows path to validation file and factor file
 */
const Validation = require('src/Validation'),
Response = require('src/utils/Response'),
productFactory = require('src/Factory/product_factory')



exports.getProducts = {
    description: 'Get All products under category',
    tags: ['api', 'product'],
    plugins: {
        'hapi-swagger': {
            responses: Response.responses
        }
    },
    auth: 'simple',
    validate: Validation.product_validation.getProducts,
    handler: function (request, reply) {  
        productFactory.getProducts(request, reply);
    }
}