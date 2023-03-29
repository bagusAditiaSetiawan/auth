import { Request, Response } from "express";
import { BadRequestError } from "../../../errors/badrequest-error";
import {generatePagination, QueryPagination} from "../../../helpers/pagination";
import {UserService} from "./../services/user";
import { UserPayload } from "../utills/interface/user";
import { JWT } from "../services/jwt";
import { Password } from "../services/password";


export const get = async (req: Request, res: Response) => {
    const query = req.query as QueryPagination ;
    const {limit, offset} = generatePagination(query);
    try {
        const pagination = await UserService.pagination({ limit, offset });
        return res.json(pagination);
    } catch (err) {
        throw new BadRequestError("Get data master user failed")
    }
}

export const detail = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const user = await UserService.find({id: +id})
        if(!user) throw new BadRequestError('Id is not founded');
        return res.json(user);
    } catch (err) {
        throw new BadRequestError("Get data master user failed")
    }
}


export const signup = async (req: Request, res: Response) => {
    const { name, email, password, role} = req.body;
    const isExist = await UserService.find({email});
    if(isExist) throw new BadRequestError('Username Or Email is already exist');

    const user = await UserService.create({name, email, password, role});

    const userPayload: UserPayload = {
        email: user.email,
        password: password,
    };

    const token = await JWT.generateToken(userPayload);
    res.status(201).json({
        token
    });
}

export const signin = async (req: Request, res: Response) => {
    const { email, password} = req.body;
    const user = await UserService.find({email});
    if(!user) throw new BadRequestError('Email is not founded');

    const isMatch = await Password.compare(user.password, password);
    if(!isMatch) throw new BadRequestError('Password is wrong');

    const userPayload: UserPayload = {
        email: user.email,
        password: password,
    };

    const token = await JWT.generateToken(userPayload);
    res.json({
        token
    });
}


export const destory = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const user = await UserService.find({id: +id})
        if(!user) throw new BadRequestError('Id is not founded');
        await UserService.destory(+id);        
        return res.json(user);
    } catch (err) {
        throw new BadRequestError("Delete user is failed")
    }
}