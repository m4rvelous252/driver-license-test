import { Answer } from "./answer";
import { Type } from "./type";



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