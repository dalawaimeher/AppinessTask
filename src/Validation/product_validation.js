
/**
 * i have used JOI validation using Hapi.js
 * this is JSON validation 
 */
const Joi = require('joi');

module.exports = function () {
    return {
        getProducts: {
            headers: Joi.object({
                'authorization': Joi.string().allow(null, '')
            }).options({ allowUnknown: true }),
            query : {
                categoryName: Joi.string()
            }
        }
    }
}();