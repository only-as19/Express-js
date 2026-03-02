
class CustomAPIError extends Error {
    constructor(message,status) {
        super(message)
        this.status = status
    }
}

const createCustomError = ()=>{
return new CustomAPIError(mesg,statusCode)
}

export { createCustomError, CustomAPIError }