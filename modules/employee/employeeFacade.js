'use strict'

const employeeService = require('./employeeService');
const employeeMapper = require('./employeeMapper');

/**
 * Purpose : Add new employee
 * @param {*} req 
 */
let add = (req) => {
    return employeeService.add(req).then((data) => {
        if (data === 1) {
            return employeeMapper.addErrorMapper();
        } else if (data === 2) {
            return employeeMapper.alreadyExistErrorMapper();
        } else if(data) {
            return employeeMapper.addSuccessMapper(data);
        } else {
            return employeeMapper.addErrorMapper();
        }
    }).catch((err) => {
        return employeeMapper.addErrorMapper(err);
    });
}

/**
 * Purpose : Edit employee
 * @param {*} req 
 */
let edit = (req) => {
    return employeeService.edit(req).then((data) => {
        if (data === 1) {
            return employeeMapper.editErrorMapper();
        } else if (data === 2) {
            return employeeMapper.employeeNotExistErrorMapper();
        } else if(data === 3) {
            return employeeMapper.noPermissionErrorMapper();
        } else if(data) {
            return employeeMapper.editSuccessMapper(data);
        } else {
            return employeeMapper.editErrorMapper();
        }
    }).catch((err) => {
        return employeeMapper.editErrorMapper(err);
    });
}

/**
 * Purpose : Delete employee
 * @param {*} req 
 */
let deleteE = (req) => {
    return employeeService.deleteE(req).then((data) => {
        console.log({data})
        if (data === 1) {
            return employeeMapper.deleteErrorMapper();
        } else if (data === 2) {
            return employeeMapper.employeeNotExistErrorMapper();
        } else if(data === 3) {
            return employeeMapper.noPermissionErrorMapper();
        } else if(data) {
            return employeeMapper.deleteSuccessMapper(data);
        } else {
            return employeeMapper.deleteErrorMapper();
        }
    }).catch((err) => {
        return employeeMapper.deleteErrorMapper(err);
    });
}

/**
 * Purpose : Get employee detail
 * @param {*} req 
 */
let get = (req) => {
    return employeeService.get(req).then((data) => {
        console.log({data})
        if (data === 1) {
            return employeeMapper.getErrorMapper();
        } else if (data === 2) {
            return employeeMapper.employeeNotExistErrorMapper();
        } else if(data === 3) {
            return employeeMapper.noPermissionErrorMapper();
        } else if(data) {
            return employeeMapper.getSuccessMapper(data);
        } else {
            return employeeMapper.getErrorMapper();
        }
    }).catch((err) => {
        return employeeMapper.getErrorMapper(err);
    });
}

/**
 * Purpose : Get all employees
 * @param {*} req 
 */
let getAll = (req) => {
    return employeeService.getAll(req).then((data) => {
        console.log({data})
        if (data === 1) {
            return employeeMapper.getAllErrorMapper();
        }  else if(data) {
            return employeeMapper.getAllSuccessMapper(data);
        } else {
            return employeeMapper.getAllErrorMapper();
        }
    }).catch((err) => {
        return employeeMapper.getAllErrorMapper(err);
    });
}

module.exports = {
    add,
    edit,
    deleteE,
    get,
    getAll
}