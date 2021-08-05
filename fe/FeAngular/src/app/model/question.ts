import { Answer } from "./answer";
import { Type } from "./type";



export interface Question {
    index: number;
    id?: number;
    type_id?: number;
    text: any;
    img?: any; 
    create_date?: any;
    delete_date?: any;
    update_date?: any;
    dead_point?: number;
    pick_one?: boolean;
    type?: Type;
    answers: Answer[];
    is_correct?: boolean;
    is_done?: string;
    edit?: boolean;
}

export class question implements Question {
    index!: number;
    answers: Answer[];
    text: string;
    id?: number;
    type_id?: number;
    img?: any; 
    create_date?: any;
    delete_date?: any;
    update_date?: any;
    dead_point?: number;
    pick_one?: boolean;
    type?: Type;
    is_correct?: boolean;
    is_done?: string;
    edit?: boolean;

    constructor(answers: Answer[], text:string, edit: boolean){
        this.answers=answers,
        // this.index=index,
        this.text=text
        this.edit=edit
    }

    // constructor(){}
}