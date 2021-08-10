import { Component, Input, OnInit } from '@angular/core';
import { STYLE } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { QuizType } from 'src/app/model/quiztype';
import { Type } from 'src/app/model/type';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-card-type-add-quiz',
  templateUrl: './card-type-add-quiz.component.html',
  styleUrls: ['./card-type-add-quiz.component.css']
})
export class CardTypeAddQuizComponent implements OnInit {

  @Input() quiztype!: QuizType

  style=this.ui.getStyleMode()

  constructor(private ui: UiService) { }

  ngOnInit(): void {
  }

  up(){
    if(this.quiztype.amount < this.quiztype.type.sizeNotDelete!){
      this.quiztype.amount++;
    }
  }

  down(){
    if(this.quiztype.amount>0){
      this.quiztype.amount--;
    }
  }

}
