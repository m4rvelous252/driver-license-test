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
    dangerColor:"#FE5F55",

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
    index: 1,
    text: ' ',
    answers: [],
    edit: false
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



