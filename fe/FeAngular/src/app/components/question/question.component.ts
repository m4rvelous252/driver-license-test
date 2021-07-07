import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questions: Question[] =[]

  constructor() { }

  ngOnInit(): void {

  }


}
