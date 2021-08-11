
import { Question } from "./question";
import { QuizType } from "./quiztype";
import { Type } from "./type";

export class Quiz{
    id?:number;
    createDate!: Date;
    update_date!: Date;
    delete_date!: Date;
    deleted!: boolean;
    name!:string;
    time!:number;
    idCategory!:number;
    questions!: Question[];
    quizType!: QuizType[];
    passMark!: number;
    submit!:number;

    constructor(){

    }

}


