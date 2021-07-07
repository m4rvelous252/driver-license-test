import { Subscription } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from 'src/app/model/question';
import { UiService } from 'src/app/services/Ui/ui.service';

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


  @Output() btnClick = new EventEmitter();

  constructor(private uiService: UiService) {
    // this.uiService.setDoneQuestion(this.question!)
   
   }

  ngOnInit(): void {
    this.question!.is_done='blue';
  }

  toggleQuestion() {
    console.log('toggle');
  }

  onClick(question?: Question){
    this.btnClick.emit(question);
    

    // console.log('add');
  }
  


}
