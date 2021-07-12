import { Quiz } from "./quiz";
import { Type } from "./Type";

export interface Category {
    id: number
    create_date: Date
    update_date: Date
    delete_date: Date
    name: string
    type: Type[]
    quiz: Quiz[]
}