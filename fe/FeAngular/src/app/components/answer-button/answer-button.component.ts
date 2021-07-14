import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Answer } from 'src/app/model/answer';

import { STYLE } from 'src/app/model/constants';


@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit {
  @Input() answer!: Answer;

  @Input() pick_one?: boolean;
  @Output() onSelectAnswer: EventEmitter<Answer> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();

  public imgSelect: string = "https://centralresidences.vn/wp-content/uploads/2020/05/da%CC%82%CC%81u-tick-.png"
  public imgUnselect: string = "https://cdn.pixabay.com/photo/2014/05/21/19/14/the-question-mark-350168_1280.png"
  public primaryColor: string = STYLE.primeColor
  public selectColor: string = STYLE.secondColor
  public primeTxtColor: string = STYLE.primeTxtColor
  public selectTxtColor: string = STYLE.secondTxtColor
  public unCorrectColor: string = STYLE.dangerColor

  is_test!: boolean


  constructor() { 
  }

  ngOnInit(): void {
    if(this.answer.is_correct==null){
      this.is_test=true
    }else{
      this.is_test=false
    }
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

  
  // isMarked() :boolean {
  //   if(is_correct=)
  // }

  colorBlue() :string{
    return "blue"
  }


}
