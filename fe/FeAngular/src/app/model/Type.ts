import { Question } from "./question";

export interface Type {
    id: number | undefined;
    type_name: string | undefined;
    questions: Question[]
};