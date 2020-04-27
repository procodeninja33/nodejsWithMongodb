'use strict'

const companyConstant = require('./companyConstant');
/**
 * Purpose: Set response for unauthorized user
 * @param {*} err 
 */
let unauthorizedAccess = (err) => {
    return {
        status: companyConstant.CODE.unauthorized,
        message: companyConstant.MESSAGE.unauthorizedAccess,
        data: err
    }
}

/**
 * Purpose: Set response for required authorization token
 */
let authorizstionTokenRequire = () => {
    return {
        status: companyConstant.CODE.unauthorized,
        message: companyConstant.MESSAGE.authorizstionTokenRequire,
        data: {}
    }
}

/**
 * Purpose: Set response for alredy exist user
 */
let alreadyExistErrorMapper = () => {
    return {
        status: companyConstant.CODE.badrequest,
        message: companyConstant.MESSAGE.alreadyExistError,
        data: {}
    }
}

/**
 * Purpose: Set response for registarion error 
 * @param {*} err 
 */
let registerErrorMapper = (err = {}) => {
    return {
        status: companyConstant.CODE.badrequest,
        message: companyConstant.MESSAGE.registerError,
        data: err
    }
}

/**
 * Purpose: Set response for Success registarion
 * @param {*} data 
 */
let registerSuccessMapper = (data) => {
    return {
        status: companyConstant.CODE.ok,
        message: companyConstant.MESSAGE.registerSuccess,
        data: data
    }
}

/**
 * Purpose: Set response for login error 
 * @param {*} err 
 */
let loginErrorMapper = (err = {}) => {
    return {
        status: companyConstant.CODE.badrequest,
        message: companyConstant.MESSAGE.loginError,
        data: err
    }
}

/**
 * Purpose: Set response for Invalid email and password
 */
let invalidEmailPasswordErrorMapper = () => {
    return {
        status: companyConstant.CODE.badrequest,
        message: companyConstant.MESSAGE.invalidEmailPassword,
        data: {}
    }
}

/**
 * Purpose: Set response for login success
 * @param {*} data 
 */
let loginSuccessMapper = (data) => {
    return {
        status: companyConstant.CODE.ok,
        message: companyConstant.MESSAGE.loginSuccess,
        data: data
    }
}

module.exports = {
    unauthorizedAccess,
    authorizstionTokenRequire,

    alreadyExistErrorMapper,
    registerErrorMapper,
    registerSuccessMapper,

    loginErrorMapper,
    invalidEmailPasswordErrorMapper,
    loginSuccessMapper
}