

/*  Route details
 */

const productController = require('src/controller/Product_controller');

module.exports = [
    { method: 'GET', path: '/getProducts/{categoryName}', config: productController.getProducts }
]