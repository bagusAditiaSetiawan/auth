import { CustomError } from "./customer-error";

export class NotFoundError extends CustomError {
    statusCode = 404;
    reason = 'Request not found';
    constructor() {
        super('Request not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{message: this.reason}]
    }
}