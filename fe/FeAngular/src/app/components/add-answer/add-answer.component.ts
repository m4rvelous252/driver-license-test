import { answer } from './../../model/answer';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Answer } from 'src/app/model/answer';
import { STYLE } from 'src/app/model/constants';
import { UiService } from 'src/app/services/Ui/ui.service';


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
  @Output() onAddAnswer: EventEmitter<string> = new EventEmitter();

  isCorrectColor!:string

  correctAnswerColor = 'radial-gradient(79.59% 13727.03% at 19.21% 20.41%, #83D589 0%, rgba(0, 194, 14, 0.37) 100%)'

  style=this.ui.getStyleMode()

  constructor(private ui: UiService) { }

  ngOnInit(): void {
    this.isCorrectColor = this.answer.is_correct ? this.style.secondColor : this.style.navColor
  }

  deleteAnswer(){
    this.onDeleteAnswer.emit()
  }

  toggleIsCorrect(){
    this.answer.is_correct=!this.answer.is_correct
    console.log(this.answer.is_correct) 
    this.isCorrectColor = this.answer.is_correct ? this.style.secondColor : this.style.navColor
  }

  displayAnswerColor(){
    if (this.answer.is_correct) 
    return this.correctAnswerColor
    else
    return this.style.contentTxtColor
  }

  displayTxtColor(){
    if (this.answer.is_correct) 
    return this.style.blackColor
    else
    return this.style.contentBgColor
  }

  addAnswer(){
    this.onAddAnswer.emit()
  }

}
