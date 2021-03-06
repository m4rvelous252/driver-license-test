import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';
import { PATHS, STYLE, HOSTNAME } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { User } from 'src/app/model/user';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  paths = PATHS

  user?: User

  style=this.ui.getStyleMode()

  @Input() quiz?: Quiz;
  @Input() checkOwner?: boolean;

  @Output() deleteClick = new EventEmitter();
  @Output() redoClick = new EventEmitter();

  url?: string

  constructor(private router: Router, private ui : UiService) { }

  ngOnInit(): void {
    this.url =`${HOSTNAME.frontend}/quiz/${this.quiz!.id}/edit`

    console.log(this.checkOwner)
  }

  delete(){
    console.log("h")
    this.deleteClick.emit()
  }

  redo(){
    this.redoClick.emit()
  }



}
