import express from 'express';
import 'express-async-errors';
import { userRouter } from './modules/auth/routes/user';
import { prisma } from '../prisma/client';
import { json } from 'body-parser';
import cookieSession from 'cookie-session'
import { NotFoundError } from './errors/not-found-error';
import { errorHandler } from './middleware/errror-handler';
import cors from 'cors';

const app = express();

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log('DB Connected')
    } catch(err) {
        console.log(err);
    }
}


app.use(json());
app.use(cors());
app.use(cookieSession({
    signed: false,
    secure: false,
}));


app.use('/api/users', userRouter);

app.all("*", async (req, res) => {
    throw new NotFoundError();
})    
app.use(errorHandler);

export {app, connectDB};