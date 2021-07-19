import { QuestionMapButtonComponent } from "../components/question-map-button/question-map-button.component";
import {Type } from "./type";

export interface QuizType{
    id_quiz: number;
    id_type: number;
    type: Type;
}
