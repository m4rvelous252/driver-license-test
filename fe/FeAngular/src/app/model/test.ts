import { QuestionMapButtonComponent } from "../components/question-map-button/question-map-button.component";
import { Question } from "./question";
import { Quiz } from "./quiz";

export interface Test{
    create_date:Date;
    timeStart:number;
    name:string;
    time:number;
    id_user:number;
    quiz: Quiz;
    questions: Question[];
}
