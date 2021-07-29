import { Answer, answer } from "./answer"
import { Question } from "./question"
import { Type } from "./type"

export const STYLE = {
    primeColor: "#086375",
    secondColor: "#7DCD85",
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
  //Header
  header_background_color: "#010101",
  header_imgDirection : "../../../assets/icon/darkmode.png",
  header_textColor:"#FFFFFF",

  //Home Page
  home_background_top: "#31302D",
  home_textColorOnBackGround: "#FFFFFF",
  home_colorButton:"#FFCB31",
  home_textColorButton:"#000000",
  home_backfround_releaseCategory: "#C4C4C4",
}

export const LightMode ={
  //Header
  header_background_color: "#FFFFFF",
  header_imgDirection : "../../../assets/icon/lightmode.png",
  header_textColor:"#000000",

  //Home Page
  home_background_top: "#086375",
  home_textColorOnBackGround: "#FFFFFF",
  home_colorButton:"#FFCB31",
  home_textColorButton:"#000000",
  home_backfround_releaseCategory: "#C4C4C4",
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



