import { app, connectDB } from "./app";
import dotenv from "dotenv";
dotenv.config();
const start = async () => {
    if(!process.env.JWT_SECRET) {
        throw new Error('Jwt key not founded')
    }
    try{
        await connectDB()
        const port = process.env.PORT ?? 8080;
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    }catch(err) {
        console.log(err);
    }
}

start();