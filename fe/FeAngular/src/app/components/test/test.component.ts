import { Question } from 'src/app/model/question';
import { Answer } from './../../model/answer';
import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  questions?: Question[]= [];

  curQuestion?:Question;

  pageCtn?: number;

  constructor(private questionService: QuestionService) {
   }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe((quesitons) => (this.questions = quesitons,this.addIndex()));
    
  }

  viewQuestion(question: Question){
    this.curQuestion=question;
    console.log(question)
  }

  viewQuestionByIndex(index: number){
    this.viewQuestion(this.questions?.find(x => x.index == index)!)
    console.log(this.questions?.find(x => x.index == index)!)
  }


  submit(questions: Question[]){


    // This works
    this.questionService.submitQuiz(questions).subscribe(() => (this.questions?.push))


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

}
