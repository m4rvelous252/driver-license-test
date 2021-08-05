
import { Question } from "./question";
import { QuizType } from "./quiztype";
import { Type } from "./type";

export class Quiz{
    id?:number;
    create_date!: Date;
    update_date!: Date;
    delete_date!: Date;
    deleted!: boolean;
    name!:string;
    time!:number;
    id_category!:number;
    questions!: Question[];
    quizType!: QuizType[];
    passMark!: number;

    constructor(){

    }

}


