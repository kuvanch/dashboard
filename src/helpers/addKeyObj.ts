import { setDate } from "./setDate"

export const addKeyObj = (data: any[]) => {
    return data.map((item,i) => ({
        ...item, 
        key: item.id,num: i+1,
        createdAt: setDate(item.createdAt),
        updatedAt: setDate(item.updatedAt)
        }))
}