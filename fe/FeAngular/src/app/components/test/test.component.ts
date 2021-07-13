
import { Question } from 'src/app/model/question';
import { Answer } from '../../model/answer';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { TestService } from 'src/app/services/test/test.service';
import { STYLE } from 'src/app/model/style';
import { Quiz } from 'src/app/model/quiz';
import { ActivatedRoute, Params } from '@angular/router';
import { Test } from 'src/app/model/test';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  id_quiz!:string

  test!: Test;
  quiz!: Quiz;
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


  constructor(
    private questionService: QuestionService,
    private testService: TestService,
    private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    if(localStorage.getItem("test")!=null){
      this.test = JSON.parse(localStorage.getItem("test")!)
      this.questions = this.test!.questions
      this.quiz = this.test!.quiz
      this.curQuestion = this.questions?.find(x => x.index == 1)
      if(this.questions!.length<=0){
        localStorage.removeItem("test")
        this.ngOnInit()
        return
      }
    }else{
      console.log("not local")
      this.route.params.subscribe(
        (params: Params) => {
          this.id_quiz = params['id_quiz'];
        }
      );
      this.testService.getRandomQuestionByQuiz(this.id_quiz).subscribe((test) => (
        this.questions = test.questions,
        this.quiz=test.quiz,
        this.test=test,
        localStorage.setItem("test",JSON.stringify(this.test))
        ));
    }
    this.addIndex()
  }

  viewQuestion(question: Question){
    this.curQuestion=question;
    localStorage.setItem("test",JSON.stringify(this.test))
  }

  viewQuestionByIndex(index: number){
    this.viewQuestion(this.questions?.find(x => x.index == index)!)
    console.log(this.questions?.find(x => x.index == index)!)
  }


  submit(questions: Question[]){


    // 
    // This works
    this.questionService.submitQuiz(questions).subscribe(() => (this.questions?.push))
    localStorage.removeItem("test")

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
