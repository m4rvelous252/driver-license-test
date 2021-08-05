

export interface Answer {
    id?: number;
    question_id?: number;
    text?: string;
    img?: string;
    is_correct?: boolean;
    create_date?: any;
    delete_date?: any;
    update_date?: any;
    is_select?: boolean;
}

export class answer implements Answer {
    id?: number;
    question_id?: number;
    img?: string;
    is_correct?: boolean;
    create_date?: any;
    delete_date?: any;
    update_date?: any;
    is_select?: boolean;
    text! :string;
    // constructor(text: string){
    //     this.text=text
    // }
    constructor(){}
}