'use strict'

const CODE = {
    ok: 200,
    badrequest: 400,
    unauthorized: 401,
    requiredField: 500,
    forbiddenRequest: 403
}

const REQUIREDFIELDS = {

}
const MESSAGE = {
    unauthorizedAccess: 'Failed to authenticate token.',
    authorizstionTokenRequire: 'Authorization token is required.',

    invalidEmail: 'Invalid Email.',
    invalidPassword: 'Password should atleast one alphanumerical, one number and one special character.',
    invalidConfrimPassword: 'Password and confirm password should be same.',
    alreadyExistError: 'Company already exist.',
    registerError: 'There is some issue with register.',
    registerSuccess: 'Company register successfully.',

    loginError: 'There is some issue with login.',
    invalidEmailPassword: 'Invalid email or password.',
    loginSuccess: 'Company login successfully.'
}



module.exports = {
    CODE,
    MESSAGE,
    REQUIREDFIELDS
}