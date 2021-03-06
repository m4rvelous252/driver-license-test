import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { KEY, STYLE } from 'src/app/model/constants';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import {Location} from '@angular/common';
import { UiService } from 'src/app/services/Ui/ui.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  primeTxtColor = STYLE.primeTxtColor
  primaryColor = STYLE.primeColor

  id_quiz!: string
  quiz!: Quiz

  style=this.ui.getStyleMode()

  constructor(
    private quizService:QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location,
    private ui: UiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_quiz = params['id_quiz'];
      }
    );
    this.quizService.getQuizById(this.id_quiz).subscribe((res)=>(this.quiz=res.data))
  }

  startQuiz(){
    localStorage.removeItem(KEY.test)
    this.quizService.getRandomQuestionByQuiz(this.id_quiz).subscribe((response)=>(
      localStorage.setItem(KEY.test,JSON.stringify(response.data)),
      console.log(response.data),
      this.router.navigate(['/test'])
    ));

  }

  backClicked() {
    this._location.back();
  }
  
  editQuiz(){
    let url = this.router.url + '/edit'
    this.router.navigate([url])
  }

}
