import { Quiz } from "./quiz";
import { Type } from "./type";
import { User } from "./user";

export interface Category {
    id: number
    create_date: Date
    update_date: Date
    delete_date: Date
    name: string
    type: Type[]
    quiz: Quiz[]
    img: string
    user: User
}
