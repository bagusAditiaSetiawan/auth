import jwt from 'jsonwebtoken'
import { UserPayload } from '../utills/interface/user';

export class JWT {
    static async generateToken(user: UserPayload): Promise<string> {
        const token = jwt.sign(user, process.env.JWT_SECRET!, {
            expiresIn: Math.floor(Date.now() / 1000) + (60 * 60),
        });
        return token;
    }
    static async compare(token: string): Promise<UserPayload>{
        const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
        return payload;
    }
}