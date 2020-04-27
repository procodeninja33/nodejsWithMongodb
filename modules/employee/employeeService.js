'use strict';

const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConfig').sequelize;

const bcrypt = require('bcryptjs');

const roleSchema = require('../role/roleModel');
const companySchema = require('../company/companyModel');
const employeeSchema = require('./employeeModel');

/**
 * Purpose : Add new employee
 * @param {*} req 
 */
let add = (req) => {

    let reqBody = req.body;

    let findQuery = {
        where: {
            emp_isdelete: false,
            emp_email: reqBody.emp_email,
        }
    }

    // find employee email is exist or not
    return employeeSchema.findOne(findQuery).then(async (employeeResult) => {

        // check employee email is already exist, if not then continue
        if (!employeeResult || employeeResult == null) {

            // find employee role with there id
            let employeeRole = await roleSchema.findOne({ where: { rol_name: 'Employee' } });

            let saveData = {
                emp_rol_id: (employeeRole && employeeRole.rol_id) ? employeeRole.rol_id : '',
                emp_cmp_id: req.cmp_id,
                emp_firstname: reqBody.emp_firstname,
                emp_lastname: reqBody.emp_lastname,
                emp_email: reqBody.emp_email,
                emp_doj: req.body.emp_doj
            }

            // create new employee record
            return employeeSchema.create(saveData).then((result) => {

                // return employee detail
                return result;

            }).catch((err) => {

                // there is som issue with add employee
                return 1;
            })

        } else {

            // employee already exist
            return 2;
        }

    }).catch((err) => {

        // there is some issue with add employee
        return 1;
    });
}

/**
 * Purpose : Edit employee
 * @param {*} req 
 */
let edit = (req) => {

    let reqBody = req.body;

    let findQuery = {
        where: {
            emp_id: req.params.id,
            emp_isdelete: false
        }
    }

    // find employee email is exist or not
    return employeeSchema.findOne(findQuery).then(async (employeeResult) => {

        // check employee exist or not
        if (employeeResult && employeeResult !== null) {

            // check company id same of employee id
            if (employeeResult.emp_cmp_id === req.cmp_id) {

                let updateField = {
                    emp_firstname: reqBody.emp_firstname,
                    emp_lastname: reqBody.emp_lastname,
                    emp_doj: reqBody.emp_doj
                }

                return employeeSchema.update(updateField, findQuery).then((result) => {

                    // update successfully
                    return employeeResult
                })

            } else {

                // use have no permission to edit this employee
                return 3;
            }
        } else {

            // employee not found
            return 2;
        }

    }).catch((err) => {

        // there is some issue with edit employee
        return 1;
    });
}

/**
 * Purpose : Delete employee
 * @param {*} req 
 */
let deleteE = (req) => {

    let findQuery = {
        where: {
            emp_id: req.params.id,
            emp_isdelete: false
        }
    }

    // find employee email is exist or not
    return employeeSchema.findOne(findQuery).then(async (employeeResult) => {

        // check employee exist or not
        if (employeeResult && employeeResult !== null) {

            // check company id same of employee id
            if (employeeResult.emp_cmp_id === req.cmp_id) {

                let updateField = {
                    emp_isdelete: true
                }

                return employeeSchema.update(updateField, findQuery).then((result) => { // soft delete
                    // return employeeSchema.destroy(findQuery).then((result) => { // hard delete

                    // update successfully
                    return employeeResult
                })

            } else {

                // use have no permission to delete this employee
                return 3;
            }

        } else {

            // employee not exist
            return 2;
        }

    }).catch((err) => {

        // there is some issue with delete
        return 1;
    });
}

/**
 * Purpose : Get employee detail
 * @param {*} req 
 */
let get = (req) => {

    let findQuery = {
        where: {
            emp_id: req.params.id,
            emp_isdelete: false
        }
    }

    // find employee email is exist or not
    return employeeSchema.findOne(findQuery).then(async (employeeResult) => {

        // check employee exist or not
        if (employeeResult && employeeResult !== null) {

            // check company id same of employee id
            if (employeeResult.emp_cmp_id === req.cmp_id) {

                return { employee: employeeResult }

            } else {

                // use have no permission to get this employee
                return 3;
            }

        } else {

            // employee not exist
            return 2;
        }

    }).catch((err) => {

        // there is some issue with get
        return 1;
    });
}

/**
 * Purpose : Get all employees
 * @param {*} req 
 */
let getAll = (req) => {

    let findQuery = {
        where: {
            emp_cmp_id: req.cmp_id,
            emp_isdelete: false
        }
    }

    // find employee email is exist or not
    return employeeSchema.findAll(findQuery).then(async (employeeResult) => {

        return { employees: employeeResult }

    }).catch((err) => {

        // there is some issue with get
        return 1;
    });
}

module.exports = {
    add,
    edit,
    deleteE,
    get,
    getAll
}