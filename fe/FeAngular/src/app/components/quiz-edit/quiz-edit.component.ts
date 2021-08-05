import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.css']
})
export class QuizEditComponent implements OnInit {

  constructor(private quizService:QuizService,private route : ActivatedRoute, private router: Router) { }

  quiz!: Quiz

  id_quiz! : string

  async ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_quiz = params['id_quiz'];
      }
    );
    await this.quizService.getQuizById(this.id_quiz).toPromise().then((res)=>(this.quiz=res.data))
  }
}
