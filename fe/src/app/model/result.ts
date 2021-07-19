import { QuestionMapButtonComponent } from "../components/question-map-button/question-map-button.component";
import { Question } from "./question";
import { Quiz } from "./quiz";

export interface Result{
    create_date:Date;
    delete_date:Date;
    deleted: boolean;
    id: number;
    id_user:number;
    mark: number;
    timeStart:number;
    name:string;
    time:number;
    max:number;
    questions: Question[];
}
