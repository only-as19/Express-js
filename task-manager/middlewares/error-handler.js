const {customAPIError} = require('../error/custom-error')

const errorHandler = (err,req,res,next)=>{
    if(err instanceof customAPIError){
        return res.status(err.status).json({msg:err.message})
    }
}

module.exports = errorHandler