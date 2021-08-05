
import { Question } from "./question";

export interface Type {
    id?: number
    create_date?: string
    update_date?: string
    delete_date?: string
    deleted?: boolean
    type_name: string
    questions: Question[]
    sizeNotDelete?: number
    sizeDeleted?: number
    id_category?:number;
}

export class type implements Type {
    type_name: string;
    questions: Question[]
    id?: number
    create_date?: string
    update_date?: string
    delete_date?: string
    deleted?: boolean

    constructor(name: string, questions: Question[]){
        this.type_name=name;
        this.questions=questions
    }
  sizeNotDelete?: number;
  sizeDeleted?: number;
  id_category?:number;

    // constructor(){}
}
