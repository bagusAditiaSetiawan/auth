import { Role } from "@prisma/client";

export interface FindUser {
    id?: number,
    email?: string,
}

export interface CreateUser extends FindUser{
    name: string,
    email: string,
    password: string,
    role: Role,
}