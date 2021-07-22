
import { Question } from "./question";

export interface Type {
    id: number 
    create_date: string
    update_date: string
    delete_date: string
    deleted: boolean
    type_name: string 
    questions: Question[]
    sizeNotDelete : number
    sizeDeleted: number
}
