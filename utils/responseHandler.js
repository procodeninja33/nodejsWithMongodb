

/**
 * Purpose: Common Response send 
 * @param {*} res 
 * @param {*} result 
 */
let _sendResponse = (res, result) => {
    res.send(result)
}


/**
 * Purpose: Success response send
 * @param {*} res 
 * @param {*} result 
 */
let successResponse = (res, result) => {

    const response = {
        status: result.status,
        message: result.message,
        data: result.data
    }
    _sendResponse(res, response);
}


/**
 * Purpose: Error Handle response send
 * @param {*} res 
 * @param {*} result 
 */
let errorHandler = (res, result) => {
    const response = {
        status: result.status,
        message: result.message,
        data: {}
    }
    _sendResponse(res, response);
}

module.exports = {
    successResponse,
    errorHandler
}