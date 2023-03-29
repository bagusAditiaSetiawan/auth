import { prisma } from "../../../../prisma/client"
import { Password } from "./password"
import { FindUser, CreateUser } from "../utills/types/auth"
import { UserDataPagination, UserFilterPagination } from "../utills/interface/user";
import { Role } from "@prisma/client";


export class UserService {
    static async pagination({limit, offset}: UserFilterPagination): Promise<UserDataPagination> {
        const total = await prisma.sys_users.count();
        const data = await prisma.sys_users.findMany({
            skip: offset,
            take: limit,
            orderBy: [
                {
                    id: 'desc'
                }
            ]
        });
        return {
            total,
            data,
        }
    }

    static async find({id, email}: FindUser) {
        return prisma.sys_users.findFirst({
            where: {
                OR: [
                    {id},
                    {email},
                ]
            }
        })
    }

    static async destory(id: number) {
        return prisma.sys_users.delete({
            where: {
                id
            }
        })
    }

    static async create({name, email, password, role}: CreateUser) {
        return prisma.sys_users.create({
            data: {
                name, email, password: await Password.toHash(password), role,
            }
        })
    }
}
