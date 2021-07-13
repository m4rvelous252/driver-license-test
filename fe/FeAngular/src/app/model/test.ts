import { QuestionMapButtonComponent } from "../components/question-map-button/question-map-button.component";
import { Question } from "./question";
import { Quiz } from "./quiz";

export interface Test{
    quiz: Quiz;
    questions: Question[];
}
