'use strict';

const jwt = require('jsonwebtoken');
const responseHandler = require('./responseHandler');
const companyMapper = require('../modules/company/companyMapper')

/**
 * Purpose: common Authorization token handler
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let verifyToken = (req, res, next) => {

    // Fetch authentication token from the header
    let token = req.headers.authorization;

    // if authorization token is exist then continiue
    if (token) {

        // verify the token with jwt
        jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {

            // check token expired then store to black list
            if (err) {
                responseHandler.errorHandler(res, companyMapper.unauthorizedAccess(err))
            }

            req.cmp_email = decoded.cmp_email;
            req.cmp_id = decoded.cmp_id;

            next();
        });

    } else {
        responseHandler.errorHandler(res, companyMapper.authorizstionTokenRequire())
    }

}

module.exports = {
    verifyToken
}