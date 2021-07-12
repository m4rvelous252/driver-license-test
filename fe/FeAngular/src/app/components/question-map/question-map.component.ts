import { Component, OnInit, Input } from '@angular/core';

import { Question } from 'src/app/model/Question';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-map',
  templateUrl: './question-map.component.html',
  styleUrls: ['./question-map.component.css']
})
export class QuestionMapComponent implements OnInit {
  @Input() questions: Question[] = []

  constructor() { }

  ngOnInit(): void {
  }

  toggleQuestion() {
    console.log('toggle');
  }

  submit(){
    console.log('submit')
  }

}
