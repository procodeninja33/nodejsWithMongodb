'use strict'

const companyService = require('./companyService');
const companyMapper = require('./companyMapper');

/**
 * Purpose: Company registration
 * @param {*} req 
 */
let register = (req) => {
    return companyService.register(req).then((data) => {
        if (data === 1) {
            return companyMapper.registerErrorMapper();
        } else if (data === 2) {
            return companyMapper.alreadyExistErrorMapper();
        } else if(data) {
            return companyMapper.registerSuccessMapper(data);
        } else {
            return companyMapper.registerErrorMapper();
        }
    }).catch((err) => {
        return companyMapper.registerErrorMapper(err);
    })
}


/**
 * Purpose: Company login
 * @param {*} req 
 */
let login = (req) => {
    return companyService.login(req).then((data) => {
        if (data === 1) {
            return companyMapper.loginErrorMapper();
        } else if (data === 2) {
            return companyMapper.invalidEmailPasswordErrorMapper();
        } else if(data) {
            return companyMapper.loginSuccessMapper(data);
        } else {
            return companyMapper.loginErrorMapper();
        }
    }).catch((err) => {
        return companyMapper.loginErrorMapper(err);
    })
}

module.exports = {
    register,
    login
}