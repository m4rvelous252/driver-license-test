import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from 'src/app/model/answer';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit {
  @Input() answer!: Answer;
  @Output() onSelectAnswer: EventEmitter<Answer> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();


  constructor() { 
  }

  ngOnInit(): void {
  }

  toggleAnswer(){
  }

  OnSelect(answer: Answer){
    // console.log(answer)
    if(this.answer.is_select == true){
      this.answer.is_select = false
    }
    else {
      this.answer.is_select = true
      this.onSelectAnswer.emit(answer)
    }
 
    // console.log(this.answer.is_select)
    this.onCheck.emit();
  }


}
