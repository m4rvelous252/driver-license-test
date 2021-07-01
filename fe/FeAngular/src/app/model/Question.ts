import { Answer } from "./Answer";

export interface Question {
    id?: number,
    text?: string,
    img?: string,
    create_date?: Date,
    update_date?: Date,
    delete_date?: Date,
    dead_point?: boolean,
    type_id?: number,
    answers?: Answer[]
};