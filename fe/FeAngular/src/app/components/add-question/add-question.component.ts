import { answer, Answer } from './../../model/answer';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question, question } from 'src/app/model/question';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
  answers?: Answer[] = []

  @Output() deleteQuestion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.deleteQuestion.emit()
  }

  nameQuestion(text?: string){
    this.question!.text=text
    this.question!.edit=true
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

}
