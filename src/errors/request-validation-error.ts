import { ValidationError } from "express-validator";
import { CustomError } from "./customer-error";

export class RequestValidationError extends CustomError {
    statusCode = 400;
    constructor(public error: ValidationError[]) {
        super('Invalid request validation')

        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }

    serializeErrors() {
        return this.error.map((err) => ({
            message: err.msg,
            param: err.param,
        }))
    }
}