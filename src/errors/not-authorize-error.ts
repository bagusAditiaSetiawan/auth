import { CustomError } from "./customer-error";

export class NotAutorizeError extends CustomError {
    statusCode = 403;
    constructor(message?: string) {
        super(message ?? "Not Authorized")

        Object.setPrototypeOf(this, NotAutorizeError.prototype);
    }

    serializeErrors() {
        return [{message: this.message}]
    }
}