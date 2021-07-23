import { answer } from './../../model/answer';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Answer } from 'src/app/model/answer';
import { STYLE } from 'src/app/model/constants';


@Component({
  selector: 'app-add-answer',
  templateUrl: './add-answer.component.html',
  styleUrls: ['./add-answer.component.css']
})
export class AddAnswerComponent implements OnInit {

  confirm?: boolean = false

  @Input() answer!: Answer
  @Input() index?: number

  @Output() onDeleteAnswer: EventEmitter<number> = new EventEmitter();
  @Output() onComfirm: EventEmitter<string> = new EventEmitter();

  isCorrectColor!:string

  style=STYLE

  constructor() { }

  ngOnInit(): void {
    this.isCorrectColor = this.answer.is_correct ? this.style.secondColor : this.style.navColor
  }

  deleteAnswer(){
    this.onDeleteAnswer.emit()
  }

  confirmAnswer(){
    console.log(this.answer.text)
    
  }

  toggleIsCorrect(){
    this.answer.is_correct=!this.answer.is_correct
    console.log(this.answer.is_correct) 
    this.isCorrectColor = this.answer.is_correct ? this.style.secondColor : this.style.navColor
  }

}
