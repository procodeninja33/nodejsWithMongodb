'use strict'

const Sequelize = require('sequelize');
const sequelize = require('../../config/dbConfig').sequelize;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const companySchema = require('./companyModel');
const roleSchema = require('../role/roleModel');

/**
 * Purpose: Company registration 
 * @param {*} req 
 */
let register = (req) => {

    let reqBody = req.body;

    // find company email is exist or not
    return companySchema.findOne({ where: { cmp_email: reqBody.cmp_email } }).then(async (companyResult) => {

        // if compant result not found then continue
        if (!companyResult || companyResult === null) {

            // encrypt company password
            let password = await bcrypt.hashSync(reqBody.cmp_password, 10);

            // find company role with there id
            let companyRole = await roleSchema.findOne({ where: { rol_name: 'Company' } });

            // fields detail
            let saveData = {
                cmp_rol_id: (companyRole && companyRole.rol_id) ? companyRole.rol_id : '',
                cmp_name: reqBody.cmp_name,
                cmp_city: reqBody.cmp_city,
                cmp_password: password,
                cmp_email: reqBody.cmp_email
            }

            // create new record in company table
            return companySchema.create(saveData).then((result) => {

                // return user saved details
                return result;
            }).catch((err) => {

                // there is some issue with register company
                return 1;
            });
        } else {

            // company already exist in table
            return 2;
        }

    }).catch((err) => {

        // there is some issue with register company
        return 1;
    });
}


/**
 * Purpose: Company login
 * @param {*} req 
 */
let login = (req) => {

    let reqBody = req.body;

    // find company email in companies table
    return companySchema.findOne({ where: { cmp_email: reqBody.cmp_email } }).then(async (companyResult) => {

        // if company find then next
        if (companyResult && companyResult !== null) {

            // bcrypt password compare
            let passwordMatch = await bcrypt.compareSync(reqBody.cmp_password, companyResult.cmp_password || '');

            // if password is match then create token and send in response
            if (passwordMatch) {
                // create payload for generating the token
                let payload = {
                    cmp_id: companyResult.cmp_id,
                    cmp_email: companyResult.cmp_email
                }
                // Generate the token for the new user for one day validity
                let token = jwt.sign(payload, process.env.SECRETKEY, { expiresIn: "1 day" });

                return { token };
            } else {

                // invalid email or password
                return 2;
            }

        } else {

            // invalid email or password
            return 2;
        }
    }).catch((err) => {

        // there is some with login
        return 1;
    })
}

module.exports = {
    register,
    login
}