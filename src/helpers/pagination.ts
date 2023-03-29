type InfoPagination = {
    page: number,
    limit: number,
    offset: number,
}

export type QueryPagination = {
    limit?: number,
    page?: number,
    name?: string,
}


export const generatePagination = ({ page = 1, limit = 10}) => {
    return {
        page: +page,
        limit: +limit,
        offset: (page - 1) * limit,
    } as InfoPagination
}