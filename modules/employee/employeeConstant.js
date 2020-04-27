'use strict'

const CODE = {
    ok: 200,
    badrequest: 400,
    Unauthorized: 401,
    requiredField: 500,
    forbiddenRequest: 403
}

const REQUIREDFIELDS = {

}
const MESSAGE = {
    invalidEmail: 'Invalid email',

    addError: 'There is issue with add employee.',
    alreadyExistError: 'Employee already exist.',
    addSuccess: 'Employee add successfully.',

    editError: 'There is some issue with edit employee.',
    noPermission: 'You have no permission to view/edit/delete this employee',
    employeeNotExist: 'Employee not exist.',
    editSuccess: 'Employee edit successfully.',

    deleteError: 'There is issue with delete employee',
    deleteSuccess: 'Employee deleted successfully.',

    getError: 'There is issue with get employee',
    getSuccess: 'Employee get successfully.',

    getAllError: 'There is somw issue with get employees',
    getAllSuccess: 'Employees get successfully.'
}



module.exports = {
    CODE,
    MESSAGE,
    REQUIREDFIELDS
}