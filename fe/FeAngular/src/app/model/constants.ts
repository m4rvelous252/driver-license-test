import { Answer } from "./answer"
import { Question } from "./question"
import { Type } from "./type"

export const STYLE = {
    primeColor: "#086375",
    secondColor: "#7DCD85",
    navColor: "#fe5f55",
    warningColor: "#FFC145",
    primeTxtColor: "aliceblue",
    secondTxtColor: "black",
    bgColor:"#c3c3c3",
    dangerColor:"#FE5F55"
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
    index: 1,
    text: ' ',
    answers: [],
    edit: false
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


