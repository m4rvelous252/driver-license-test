
import { Question } from 'src/app/model/question';
import { Answer } from '../../model/answer';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { STYLE,KEY } from 'src/app/model/constants';
import { Test } from 'src/app/model/test';
import { Quiz } from 'src/app/model/quiz';
import { DatePipe } from '@angular/common';
import { TestService } from 'src/app/services/test/test.service';
<<<<<<< HEAD
import { DateTime } from 'luxon';
import { TimeService } from 'src/app/services/time/time.service';
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  questions?: Question[]= [];

  curQuestion?:Question;

  test!: Test
<<<<<<< HEAD
  quiz!: Quiz
=======

  quiz!: Quiz

>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
  durationTime!:number


  quizTime?: Date

  pageCtn?: number;

  alert: boolean = false;

  is_submit: boolean = false;

  primeTxtColor = STYLE.primeTxtColor
  secondTxtColor = STYLE.secondTxtColor
  primaryColor = STYLE.primeColor
  selectColor = STYLE.secondColor
  navColor = STYLE.navColor
  warningColor = STYLE.warningColor


<<<<<<< HEAD
  constructor(private questionService: QuestionService, 
    private testService: TestService,
    private timeService: TimeService,
    ) {
=======
  constructor(private questionService: QuestionService, private testService: TestService) {
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
   }

  ngOnInit(): void {
      this.test = JSON.parse(localStorage.getItem(KEY.test)!)
      this.quiz=this.test.quiz
      this.questions=this.test.questions
      this.test.time = this.quiz.time;
      this.test.name = this.quiz.name;
      if(localStorage.getItem(KEY.user)){
        const userJson = localStorage.getItem(KEY.user);
        let user = userJson !== null ? JSON.parse(userJson) : null;
        this.test.id_user = user.id;
      }
      this.curQuestion = this.questions?.find(x => x.index == 1)
      console.log(this.questions)
      this.addIndex()
<<<<<<< HEAD
      this.countDurationTime()
      setInterval(()=>{this.checkEvent()}, 1000);
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
  }

  viewQuestion(question: Question){
    this.curQuestion=question;
<<<<<<< HEAD
=======
    console.log(question)

>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
    localStorage.setItem(KEY.test,JSON.stringify(this.test))

  }

  viewQuestionByIndex(index: number){
    this.viewQuestion(this.questions?.find(x => x.index == index)!)
    console.log(this.questions?.find(x => x.index == index)!)

  }


  submit(){
<<<<<<< HEAD
    this.is_submit=true;
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
    this.testService.submitTest(this.test)
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

  countDurationTime(){
    let time = this.test.timeStart+this.test.time-this.timeService.getCurSecond()
    if(time<0){
      time=0
    }
    this.durationTime = time
  }

  checkEvent(){
    this.countDurationTime();
    if(this.durationTime < this.quiz.time/3){
      this.alert = !this.alert;
    }
    if(this.durationTime==0&&this.is_submit == false){
      this.is_submit=true;
      this.submit()
    }
  }

  countDurationTime(){
    let date
    this.durationTime= Date.now()
    return 300
  }
}
