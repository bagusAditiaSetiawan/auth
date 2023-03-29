import { body } from "express-validator";

export class AuthRequest {    
    static signin() {
        return [
            body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be valid'),
            body('password').notEmpty().withMessage('Password is required').isLength({
                min: 8,
            }).withMessage('Password atleast 8 characters'),
        ]
    }

    static signup() {
        return [
            body('name').notEmpty().withMessage('Name is required'),
            body('role').notEmpty().withMessage('Email is required').isIn(['admin','user']).withMessage('Role is should admin or user'),
            ...this.signin(),
        ]
    }

}