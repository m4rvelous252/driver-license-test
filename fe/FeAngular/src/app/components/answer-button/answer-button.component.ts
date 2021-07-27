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
  @Input() viewMode?: string;
  @Input() pick_one?: boolean;
  @Output() onSelectAnswer: EventEmitter<Answer> = new EventEmitter();
  @Output() onCheck: EventEmitter<any> = new EventEmitter();

  public imgSelect: string = "../../../assets/img/tick.png"
  public imgUnselect: string = "../../../assets/img/question-mark.png"
  public primaryColor: string = STYLE.primeColor
  public selectColor: string = STYLE.secondColor
  public primeTxtColor: string = STYLE.primeTxtColor
  public selectTxtColor: string = STYLE.secondTxtColor
  public unCorrectColor: string = STYLE.dangerColor

  style=STYLE

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

  resultColor(){
    if (this.answer.is_correct==true){
        return this.style.secondColor
    }
    else {
      if(this.answer.is_select==true){
        return this.style.navColor
      }
      else{
        return this.style.contentTxtColor
      }
    }
  }

}
