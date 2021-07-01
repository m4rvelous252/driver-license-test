import { Question } from "./Question";

export interface Type {
    id: number | undefined;
    type_name: string | undefined;
    questions: Question[]
};