

export interface Answer {
    id?: number;
    question_id: number;
    text: string;
    img: any;
    is_correct?: boolean;
    create_date: any;
    delete_date: any;
    update_date: any;
    is_select?: boolean;
}