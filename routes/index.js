const employeeRoute = require('../modules/employee/employeeRoute');
const companyRoute = require('../modules/company/companyRoute');

module.exports = (app) => {

    /// Company router
    app.use('/api/company', [companyRoute])

    // Employee router
    app.use('/api/employee', [employeeRoute])
}