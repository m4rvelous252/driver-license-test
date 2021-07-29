import { Answer, answer } from "./answer"
import { Question } from "./question"
import { Type } from "./type"

export const STYLE = {
    primeColor: "#086375",
    secondColor: "#7DCD85",
    secondbgColor: "radial-gradient(114.29% 14863.93% at 28.64% 28.57%, #42B74B 0%, rgba(14, 163, 24, 0.56) 100%)",
    navColor: "#F42E22",
    // navColor: "#fe5f55",
    warningColor: "#FFC145",
    primeTxtColor: "aliceblue",
    secondTxtColor: "black",
    bgColor:"#31302D",
    dangerColor:"#FE5F55",
    contentBgColor:"#000000",
    contentTxtColor:"rgba(255, 203, 49, 0.9)"
    // bgColor:"#c3c3c3",
    // dangerColor:"#FE5F55",

}

export const DarkMode ={
  //Home Page
  imgDirection : "../../../assets/icon/darkmode.png",
  background_top: "#FFCB31",
  textColorOnBackGround: "#000000",
  colorButton:"#086375",
  textColorButton:"#FFFFFF",
}

export const LightMode ={
  //Home Page
  imgDirection : "../../../assets/icon/lightmode.png",
  background_top: "#086375",
  textColorOnBackGround: "#FFFFFF",
  colorButton:"#FFCB31",
  textColorButton:"#000000",
}

export const FailImg ={
  categoryImgFail : '../../../assets/img/category_fail.png'
}


export const KEY={
    test:"test",
    user:"user",
    result:"result",
    durationtimelogin:1,
    LightMode:"LightMode"
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

export const NEWTYPE : Type = {
    type_name: '',
    questions: [],
    deleted: false
}



