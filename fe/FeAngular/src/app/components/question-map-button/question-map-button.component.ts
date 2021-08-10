import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Question } from 'src/app/model/question';
import { UiService } from 'src/app/services/Ui/ui.service';
import { STYLE } from 'src/app/model/constants';

@Component({
  selector: 'app-question-map-button',
  templateUrl: './question-map-button.component.html',
  styleUrls: ['./question-map-button.component.css']
})
export class QuestionMapButtonComponent implements OnInit {
  @Input()
  question?: Question;
  @Input()
  curQuestion?: Question;


  style=this.uiService.getStyleMode()

  public imgDone = "https://centralresidences.vn/wp-content/uploads/2020/05/da%CC%82%CC%81u-tick-.png"

  @Output() btnClick = new EventEmitter();

  constructor(private uiService: UiService) {
    // this.uiService.setDoneQuestion(this.question!)
   
   }

  ngOnInit(): void {

    if(this.question?.is_done==null)
    {this.question!.is_done=this.style.contentTxtColor;}
  }

  toggleQuestion() {
    console.log('toggle');
  }

  onClick(question?: Question){
    this.btnClick.emit(question);

    console.log(question?.is_done);
  }
  
  btnTxtColor(){
    if(this.question?.is_done !== this.style.contentTxtColor){
      return this.style.blackColor
    }else{
      return this.style.contentBgColor
    }
  }

}
