'use strict'

const Joi = require('@hapi/joi');
const companyConstant = require('./companyConstant');
const responseHandler = require('../../utils/responseHandler');
const regEx = require('../../utils/regularExpression');

/**
 * Purpose: Common Validation error handler
 * @param {*} res 
 * @param {*} error 
 */
let validationErrorHandler = (res, error) => {

    console.log('error', error);

    let responseData = {
        status: companyConstant.CODE.badrequest,
        message: error.details ? error.details[0].message : 'There is some issue in validation.',
        data: {}
    }
    responseHandler.errorHandler(res, responseData);
}

/**
 * Purpose: Company Registration field validation 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let registerValidation = async (req, res, next) => {
    try {

        // create schema request parameters
        const schema = Joi.object({
            cmp_name: Joi.string().alphanum().min(2).max(32).required(),
            cmp_city: Joi.string().min(2).max(32).required(),
            cmp_password: Joi.string().pattern(regEx.passwordRegEx).required()
                .messages({ 'string.pattern.base': companyConstant.MESSAGE.invalidPassword }),
            cmp_confirm_password: Joi.any().required().valid(Joi.ref('cmp_password'))
                .messages({ 'any.only': companyConstant.MESSAGE.invalidConfrimPassword }),
            cmp_email: Joi.string().pattern(regEx.emailRegEx).required()
                .messages({ 'string.pattern.base': companyConstant.MESSAGE.invalidEmail })
        })

        await schema.validateAsync(req.body, { allowUnknown: false })
        next();
    } catch (error) {
        validationErrorHandler(res, error);
    }
}
/**
 * Purpose: Company login field valdidation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
let loginValidation = async (req, res, next) => {
    try {

        // create schema for login parameter
        const schema = Joi.object({
            cmp_email: Joi.string().pattern(regEx.emailRegEx).required()
                .messages({ 'string.pattern.base': companyConstant.MESSAGE.invalidEmail }),
            cmp_password: Joi.string().required()
        });

        await schema.validateAsync(req.body, { allowUnknown: false })
        next();

    } catch (error) {
        validationErrorHandler(res, error);
    }
}

module.exports = {
    registerValidation,
    loginValidation
}