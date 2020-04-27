'use strict';

const { Sequelize } = require('sequelize');
const config = require('./config');

let sequelize = new Sequelize(config[process.env.ENVIRONMENT]);

let connectDb = async () => {

    try {
        await sequelize.authenticate()
        console.log('2, Connection has been established successfully.')
    } catch (error) {
        console.error('2, Unable to connect to the database:', error)
    }

}

module.exports = {
    connectDb,
    sequelize
};
