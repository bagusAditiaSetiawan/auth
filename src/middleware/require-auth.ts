import { NextFunction, Request, Response } from "express";
import { NotAutorizeError } from '../errors/not-authorize-error';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if(!req.user) throw new NotAutorizeError();

    next();
}