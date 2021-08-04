import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PATHS, STYLE, HOSTNAME } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  paths = PATHS

  style=STYLE

  @Input() quiz?: Quiz

  url?: string

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url =`${HOSTNAME.frontend}/quiz/${this.quiz!.id}/edit`
  }

  delete(){

  }

}
