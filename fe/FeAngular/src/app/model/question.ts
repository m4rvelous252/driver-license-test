import { Answer } from "./answer";
<<<<<<< HEAD
import { Type } from "./type";
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71


export interface Type {
    id?: number;
    type_name: string;
}

export interface Question {
    index: number;
    id?: number;
    type_id: number;
    text: any;
    img: any; 
    create_date: any;
    delete_date: any;
    update_date: any;
    dead_point: number;
    pick_one?: boolean;
    type: Type;
    answers: Answer[];
    is_correct?: boolean;
    is_done?: string;
}