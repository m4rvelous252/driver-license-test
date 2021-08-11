import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  @Input() quizzes : Quiz[]=[]

  constructor() { }

  ngOnInit(): void {
  }

}
