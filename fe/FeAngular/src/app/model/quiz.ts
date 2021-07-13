import { QuestionMapButtonComponent } from "../components/question-map-button/question-map-button.component";
import { Question } from "./question";
import { QuizType } from "./quiztype";

export interface Quiz{
    id:number;
    create_date: Date,
    update_date: Date,
    delete_date: Date,
    deleted: boolean,
    name:string;
    time:number;
    id_category:number;
    questions: Question[];
    quizType: QuizType[];

}
