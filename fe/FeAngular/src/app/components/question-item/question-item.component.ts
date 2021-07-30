
import { Answer } from '../../model/answer';
import { AnswerService } from './../../services/answer/answer.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/question';
import { UiService } from 'src/app/services/Ui/ui.service';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent implements OnInit {
  pickedAnswers?: Answer[];
  @Input()
  question?: Question;
  @Input()
  bgColor?: string;
  @Input()
  index?: number;
  @Input()
  viewMode?: string
  // answers?: Answer[];
  @Output() onDeleteQ: EventEmitter<any> = new EventEmitter()
  @Output() onRenameQ: EventEmitter<any> = new EventEmitter()

  style=STYLE

  display?: string
  constructor(private answerService: AnswerService, private uiService: UiService) { }

  ngOnInit(): void {
    //this.answerService.getAnswer().subscribe((pickedAnswers) => this.pickedAnswers = pickedAnswers)
  }

  // makeAnswer(answer: Answer){
  //   if (answer.is_select==true){
  //     this.answerService.addAnswer(answer).subscribe((answer) => (this.answers?.push(answer)))
  //     console.log('add')
  //   }
  //   else{
  //     this.answerService.removeAnswer(answer).subscribe(() => (this.pickedAnswers?.push(answer)))
  //     console.log('remove')
  //   }
  //   // this.test.emit()
  // }

  toggleChoice(answer: Answer){
      if(this.question?.pick_one){
        this.question.answers.forEach(answer => {
          answer.is_select=false;
        });
        answer.is_select=true;        


      }
  }

  check(){
    for(let answer of this.question!.answers){
      if(answer?.is_correct!=answer?.is_select){
        this.question!.is_correct = false;
        break
      }
      else {
        this.question!.is_correct = true;     
      }
    }

    
    console.log(this.question)        
    for(let answer of this.question!.answers){
      if(answer?.is_select == true){
        this.question!.is_done = STYLE.secondColor;
        return
      }
      else{
        this.question!.is_done = STYLE.contentTxtColor;
      }
    }
  }

  onDelete(){
    this.onDeleteQ.emit()
  }

  renameQ(){
    this.onRenameQ.emit()
  }

  bgColorSetter(){
    if(this.viewMode=='result'){
    if(this.question?.is_correct)
    return this.style.secondColor
    else return this.style.navColor
    }
    else
    return this.style.contentBgColor
  }

}
