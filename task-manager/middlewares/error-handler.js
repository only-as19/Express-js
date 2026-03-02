import { CustomAPIError } from "../error/custom-error.js";
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.status).json({ msg: err.message });
  }
};

export default errorHandler;
