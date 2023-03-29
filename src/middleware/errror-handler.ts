import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/customer-error";


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    if(error instanceof CustomError) {
        return res.status(error.statusCode).json({
            errors: error.serializeErrors(),
        })
    }
    
    res.status(400).json({
        msg: [{message: 'Something went wrong'}]
    })
}