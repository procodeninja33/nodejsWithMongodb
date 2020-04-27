'use strict'

const responseHandler = require('../../utils/responseHandler');
const companyRoute = require('express').Router();
const companyFacade = require('./companyFacade');
const companyValidation = require('./companyValidation');


/**
 * Purpose: Company regisrtration
 */
companyRoute.route(`/register`).post([companyValidation.registerValidation],
    (req, res) => {
        companyFacade.register(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

/**
 * Company login
 */
companyRoute.route(`/login`).post([companyValidation.loginValidation],
    (req, res) => {
        companyFacade.login(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

module.exports = companyRoute;
