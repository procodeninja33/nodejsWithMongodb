'use strict'

let employeeConstant = require('./employeeConstant')

/**
 * Purpose: Set response add employee error
 * @param {*} err 
 */
let addErrorMapper = (err = {}) => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.addError,
        data: err
    }
}

/**
 * Purpose: Set response already exist employee
 */
let alreadyExistErrorMapper = () => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.alreadyExistError,
        data: {}
    }
}

/**
 * Purpose: Set response for employee add success
 * @param {*} data 
 */
let addSuccessMapper = (data) => {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.addSuccess,
        data: data
    }
}

/**
 * Purpose: Set response edit employee
 * @param {*} err 
 */
let editErrorMapper = (err = {}) => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.editError,
        data: err
    }
}

/**
 * Purpose: Set response no permission to access detail
 */
let noPermissionErrorMapper = () => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.noPermission,
        data: {}
    }
}

/**
 * Purpose: Set response employee not exist
 * @param {*} err 
 */
let employeeNotExistErrorMapper = (err = {}) => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.employeeNotExist,
        data: err
    }
}

/**
 * Purpose: Set response edit success
 * @param {*} data 
 */
let editSuccessMapper = (data) => {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.editSuccess,
        data: data
    }
}

/**
 * Purpose: Set response delete employee error
 */
let deleteErrorMapper = () => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.deleteError,
        data: {}
    }
}

/**
 * Purpose: Set response delete employee success
 */
let deleteSuccessMapper = () => {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.deleteSuccess,
        data: {}
    }
}

/**
 * Purpose: Set response get employee error
 */
let getErrorMapper = () => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.getError,
        data: {}
    }
}

/**
 * Purpose: Set response get employee success 
 * @param {*} data 
 */
let getSuccessMapper = (data) => {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.getSuccess,
        data: data
    }
}

/**
 * Purpose: Set response get all employee error 
 */
let getAllErrorMapper = () => {
    return {
        status: employeeConstant.CODE.badrequest,
        message: employeeConstant.MESSAGE.getAllError,
        data: {}
    }
}

/**
 * Purpose: Set response for get all success
 * @param {*} data 
 */
let getAllSuccessMapper = (data) => {
    return {
        status: employeeConstant.CODE.ok,
        message: employeeConstant.MESSAGE.getAllSuccess,
        data: data
    }
}

module.exports = {
    addErrorMapper,
    alreadyExistErrorMapper,
    addSuccessMapper,

    editErrorMapper,
    noPermissionErrorMapper,
    employeeNotExistErrorMapper,
    editSuccessMapper,

    deleteErrorMapper,
    deleteSuccessMapper,

    getErrorMapper,
    getSuccessMapper,

    getAllErrorMapper,
    getAllSuccessMapper
}