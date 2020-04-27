'use strict'

const constants = require('../../utils/constant');
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig').sequelize;

const RoleSchema = require('../role/roleModel');

// create company table
const CompanySchema = sequelize.define(constants.DB_MODEL_REF.COMPANY,
    {
        cmp_id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            autoIncrement: true
        },
        cmp_isdelete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        cmp_rol_id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            references: {
                model: RoleSchema,
                key: 'role_id'
            }
        },
        cmp_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cmp_email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cmp_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cmp_city: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: false
    }
);

// CompanySchema.belongsToMany(RoleSchema, { through: })

module.exports = CompanySchema;