
import { Question } from "./Question";
import { Type } from "./Type";

export interface QuizType {
    id: string
    id_quiz: number
    id_type: number
    type: Type
    amount: number
}

export interface Quiz{
    questions: Question[];
    time: string
    id: string
    create_date: Date
    update_date: Date
    delete_date: Date
    name: string
    id_category: number
    quizType: QuizType
}
