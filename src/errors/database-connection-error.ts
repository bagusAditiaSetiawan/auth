import { CustomError } from "./customer-error";

export class DatabaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Invalid connection to db';
    constructor() {
        super('Error connecting to db')

        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }

    serializeErrors() {
        return [{message: this.reason}]
    }
}