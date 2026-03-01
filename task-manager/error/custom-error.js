const { CustomAPIError } = require("../../final/errors/custom-error")

class customAPIError extends Error {
    constructor(message,status) {
        super(message)
        this.status = status
    }
}

const createCustomError = ()=>{
return new CustomAPIError(mesg,statusCode)
}

module.exports = {createCustomError, customAPIError}