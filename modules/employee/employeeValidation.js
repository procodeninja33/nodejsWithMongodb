'use strict'

const Joi = require('@hapi/joi');
const employeeConstant = require('./employeeConstant');
const responseHandler = require('../../utils/responseHandler');
const regEx = require('../../utils/regularExpression');

/**
 * Purpose: Common validation error handler
 * @param {*} res 
 * @param {*} error 
 */
let validationErrorHandler = (res, error) => {

    console.log('error', error);

    let responseData = {
        status: employeeConstant.CODE.badrequest,
        message: error.details ? error.details[0].message : 'There is some issue in validation.',
        data: {}
    }
    responseHandler.errorHandler(res, responseData);
}

/**
 * Purpose: parameter id validation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let paramIdValidation = async (req, res, next) => {
    try {

        // param id validation
        const schema = Joi.object({
            id: Joi.any().required()
        });
        await schema.validateAsync(req.params);
        next();

    } catch (error) {
        validationErrorHandler(res, error)
    }
}


/**
 * Purpose: Add employee field valdiation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let addValidation = async (req, res, next) => {
    try {

        // create schema request parameters
        const schema = Joi.object({
            emp_firstname: Joi.string().alphanum().min(2).max(64).required(),
            emp_lastname: Joi.string().alphanum().min(2).max(64).required(),
            emp_email: Joi.string().pattern(regEx.emailRegEx).required()
                .messages({ 'string.pattern.base': employeeConstant.MESSAGE.invalidEmail }),
            emp_doj: Joi.string().required()
        })

        await schema.validateAsync(req.body, { allowUnknown: true })
        next();
    }
    catch (error) {
        validationErrorHandler(res, error)
    }
}

/**
 * Purpose: Edit Employee field validation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let editValidation = async (req, res, next) => {
    try {

        // create schema request parameters
        const schema = Joi.object({
            emp_firstname: Joi.string().alphanum().min(2).max(64).required(),
            emp_lastname: Joi.string().alphanum().min(2).max(64).required(),
            emp_doj: Joi.string().required()
        })

        await schema.validateAsync(req.body, { allowUnknown: true })
        next();
    }
    catch (error) {
        validationErrorHandler(res, error)
    }
}


module.exports = {
    paramIdValidation,
    addValidation,
    editValidation
}