'use strict'

const employeeRoute = require('express').Router();
const responseHandler = require('../../utils/responseHandler');
const tokenHandler = require('../../utils/tokenHandler');
const employeeFacade = require('./employeeFacade');
const employeeValidation = require('./employeeValidation');

/**
 * Purpose : Add new employee
 */
employeeRoute.route(`/add`).post([tokenHandler.verifyToken, employeeValidation.addValidation],
    (req, res) => {
        employeeFacade.add(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

/**
 * Purpose :Edit employee
 */
employeeRoute.route(`/edit/:id`).patch([tokenHandler.verifyToken, employeeValidation.paramIdValidation, employeeValidation.editValidation],
    (req, res) => {
        employeeFacade.edit(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

/**
 * Purpose : Delete Employee
 */
employeeRoute.route(`/delete/:id`).delete([tokenHandler.verifyToken, employeeValidation.paramIdValidation],
    (req, res) => {
        employeeFacade.deleteE(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

/**
 * Purpose : Get employee
 */
employeeRoute.route(`/get/:id`).get([tokenHandler.verifyToken, employeeValidation.paramIdValidation],
    (req, res) => {
        employeeFacade.get(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

/**
 * Purpose : Get all employees
 */
employeeRoute.route(`/get_all`).get([tokenHandler.verifyToken],
    (req, res) => {
        employeeFacade.getAll(req).then((result) => {
            responseHandler.successResponse(res, result);
        }).catch((err) => {
            responseHandler.errorHandler(res, err);
        });
    });

module.exports = employeeRoute;
