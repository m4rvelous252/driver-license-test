import { Answer, answer } from "./answer"
import { Question } from "./question"
import { Type } from "./type"

export const STYLE = {
    primeColor: "#086375",
    secondColor: "#7DCD85",
    navColor: "#fe5f55",
    warningColor: "#FFC145",
    primeTxtColor: "aliceblue",
    secondTxtColor: "black",
    bgColor:"rgba(255, 203, 49, 0.9)",
    dangerColor:"#FE5F55",
    contentBgColor:"#000000",
    contentTxtColor:"rgba(255, 203, 49, 0.9)"
}

export const KEY={
    test:"test",
    user:"user",
    result:"result",
    durationtimelogin:1
}

export const HOSTNAME={
    backend: "http://localhost:8080",
    frontend: "http://localhost:4200",
}

export const PATHS ={
    imgPath: "../../../assets/img"
}

export const NEWQUESTION: Question = {
    'index': 1,
    text: 'This is a new Question',
    answers: [
        {
            'text': 'This is an answer'
        },
        {
            'text': 'This is another answer'
        }
    ],
    'edit': false
}

export const NEWQUESTION1: Question = {
    'index': 1,
    text: 'This is a new Question',
    answers: [
        {
            'text': 'This is an answer'
        },
        {
            'text': 'This is another answer'
        }
    ],
    'edit': false
}

export const NEWANSWER: Answer = {
    text:'',
    is_correct: false
}

export const NEWTYPE: Type = {
    type_name: '',
    questions: [],
    deleted: false
}


