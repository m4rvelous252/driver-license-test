import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
<<<<<<< HEAD
import { KEY, STYLE } from 'src/app/model/constants';
=======
import { KEY } from 'src/app/model/constants';
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
import { Quiz } from 'src/app/model/quiz';
import { QuizService } from 'src/app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

<<<<<<< HEAD
  primeTxtColor = STYLE.primeTxtColor
  primaryColor = STYLE.primeColor

=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
  id_quiz!: string
  quiz!: Quiz

  constructor(
    private quizService:QuizService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id_quiz = params['id_quiz'];
      }
    );
    this.quizService.getQuizById(this.id_quiz).subscribe((quiz)=>(this.quiz=quiz,console.log(this.quiz)))
  }

  startQuiz(){
    localStorage.removeItem(KEY.test)
    this.quizService.getRandomQuestionByQuiz(this.id_quiz).subscribe((test)=>(
      localStorage.setItem(KEY.test,JSON.stringify(test)),
      this.router.navigate(['/test'])
    ))
  }

}
