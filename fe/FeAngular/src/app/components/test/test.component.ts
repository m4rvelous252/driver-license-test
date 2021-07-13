
import { Question } from 'src/app/model/Question';
import { Answer } from '../../model/answer';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { STYLE } from 'src/app/model/constants';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  questions?: Question[]= [];

  curQuestion?:Question;


  quizTime?: Date

  pageCtn?: number;

  alert: boolean = false;

  primeTxtColor = STYLE.primeTxtColor
  secondTxtColor = STYLE.secondTxtColor
  primaryColor = STYLE.primeColor
  selectColor = STYLE.secondColor
  navColor = STYLE.navColor
  warningColor = STYLE.warningColor


  constructor(private questionService: QuestionService) {
   }

  ngOnInit(): void {

    if(localStorage.getItem("listq")!=null){
      this.questions = JSON.parse(localStorage.getItem("listq")!)
      this.curQuestion = this.questions?.find(x => x.index == 1)
    }else{
      this.questionService.getQuestions().subscribe((quesitons) => (this.questions = quesitons,this.addIndex()));
    }
    
    console.log(this.questions)
    console.log("hello")
  }

  viewQuestion(question: Question){
    this.curQuestion=question;
    console.log(question)

    localStorage.setItem("listq",JSON.stringify(this.questions))

  }

  viewQuestionByIndex(index: number){
    this.viewQuestion(this.questions?.find(x => x.index == index)!)
    console.log(this.questions?.find(x => x.index == index)!)

  }


  submit(questions: Question[]){


    // 
    // This works
    this.questionService.submitQuiz(questions).subscribe(() => (this.questions?.push))
    localStorage.removeItem("listq")

  }

  checkwork(){
    console.log('works')
  }

  preQuestion(){
    this.pageCtn = this.curQuestion?.index
    this.viewQuestionByIndex((this.pageCtn!-1))
  }

  nextQuestion(){
    this.pageCtn = this.curQuestion?.index
    this.viewQuestionByIndex((this.pageCtn!+1))
  }

  addIndex(){
    var i = 1;
    this.questions?.forEach(question => {
        question.index = i;
        i++;
        //question.is_done='blue';
    });
    this.curQuestion = this.questions?.find(x => x.index == 1)
    
    
  }


  fiveMin(){
    console.log(this.alert)
    this.alert=!this.alert
    console.log(this.alert)
  }
}
