'use strict'

const constants = require('../../utils/constant');
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig').sequelize;

const RoleSchema = require('../role/roleModel');
const CompanySchema = require('../company/companyModel');

// create employee Schema
const employeeSchema = sequelize.define(constants.DB_MODEL_REF.EMPLOYEE,
    {
        emp_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        emp_rol_id: {
            type: DataTypes.NUMBER,
            references: {
                model: RoleSchema,
                key: 'rol_id'
            }
        },
        emp_cmp_id: {
            type: DataTypes.NUMBER,
            references: {
                model: CompanySchema,
                key: 'cmp_id'
            }
        },
        emp_isdelete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emp_firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emp_lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emp_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emp_doj: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        timestamps: false
    }
)

module.exports = employeeSchema;