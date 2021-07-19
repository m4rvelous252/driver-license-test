import { Component, OnInit, Input } from '@angular/core';
import { PATHS } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  paths = PATHS

  @Input() quiz?: Quiz

  constructor() { }

  ngOnInit(): void {
  }

}
