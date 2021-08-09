import { answer, Answer } from './../../model/answer';
import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Question, question } from 'src/app/model/question';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  faTimes= faTimes
  @Input() index?: number;
  @Input() question!: Question;
  @Input() viewMode?: string;

  inside = false
  style=STYLE
  showToolbar=false

  @Output() deleteQuestion: EventEmitter<any> = new EventEmitter();
  @Output() addQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.question.text){
      this.question!.edit=true
    }
    
  }

  onDelete(){
    this.deleteQuestion.emit(this.question.id)
  }

  nameQuestion(){
    if(this.check()){
      this.question.answers.forEach(answer => {
        if (answer.text==''||!answer.text){
          this.question.answers.splice(this.question.answers.indexOf(answer), 1)
        }
        if (answer.is_correct!=true){
          answer.is_correct=false
        }
      });
      this.question!.edit=true
    }
  }

  renameQ(){
    this.question!.edit=false
  }

  newAnswer(index: number){
    var newA: answer = new answer()
    this.question?.answers.splice(index+1, 0, newA)
  }

  deleteAnswer(index:number){
    this.question?.answers.splice(index, 1)
  }

  @HostListener("dblclick")
  clicked() {
    this.inside = true;
    this.renameQ();
  }
  @HostListener("document:dblclick")
  clickedOut() {
    this.inside
      ? "inside"
      : this.nameQuestion()
    this.inside = false;
  }

  check(){
    if(!this.question.text||this.question.text==''){
      return false;
    }
    if(!this.question?.answers||this.question!.answers.length <=0){
      return false;
    }
    return true;
  }

  onAddQuestion(){
    this.addQuestion.emit()
  }

  hover(){
    this.showToolbar=true;
  }

  notHover(){
    this.showToolbar=false;
  }

}
