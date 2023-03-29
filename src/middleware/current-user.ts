import { NextFunction, Request, Response } from "express";
import { UserPayload } from './../modules/auth/utills/interface/user';
import { JWT } from './../modules/auth/services/jwt';

declare global{
    namespace Express {
        interface Request {
            user?: UserPayload,
        }
    }
}

const authSplit = (headerAuth: string) => {
    return headerAuth.split(" ");
}

const isBearer = (authorization: string[]) => {
    return authorization[0] === 'Bearer' && authorization.length <= 1
}

export const currentUser = async (req: Request, res: Response, next: NextFunction) => {
    try{
        if(!req.headers.authorization) {
            return next();
        }
        const authParts = authSplit(req.headers.authorization);
        if(isBearer(authParts)) {
            return next();
        }
        const token = authParts[1];
        const payload = await JWT.compare(token);
        req.user = payload;
    } catch(err) {
        next()
    };
    next();
}