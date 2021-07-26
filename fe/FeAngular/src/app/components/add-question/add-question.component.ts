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
  @Input() question?: Question;
  text?: string

  inside = false
  style=STYLE

  @Output() deleteQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    var newA: answer = new answer()
    this.question?.answers.push(newA)
  }

  onDelete(){
    this.deleteQuestion.emit()
  }

  nameQuestion(text?: string){
    if(this.check()){
      this.question!.text=text
      this.question!.edit=true
    }
  }

  renameQ(){
    this.question!.edit=false
  }

  newAnswer(){
    var newA: answer = new answer()
    this.question?.answers.push(newA)
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
      : this.nameQuestion(this.text)
    this.inside = false;
  }

  check(){
    if(!this.text||this.text==''){
      return false;
    }
    if(!this.question?.answers||this.question!.answers.length <=0){
      return false;
    }
    return true;
  }

}
