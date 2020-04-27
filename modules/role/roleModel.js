'use strict'

const constants = require('../../utils/constant');
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/dbConfig').sequelize;

// create schema for role 
const RoleSchema = sequelize
    .define(constants.DB_MODEL_REF.ROLE,
        {
            rol_id: {
                type: DataTypes.NUMBER,
                primaryKey: true,
                autoIncrement: true
            },
            rol_name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamps: false
        }
    );

module.exports = RoleSchema;