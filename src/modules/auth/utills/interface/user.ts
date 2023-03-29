import {sys_users} from "@prisma/client"
export interface UserPayload {
    email: string,
    password: string,
}

export type UserFilterPagination = {
    offset: number,
    limit: number
}

export type UserDataPagination = {
    data: sys_users[],
    total: number
}