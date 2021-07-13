import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/User';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { Quiz } from 'src/app/model/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl ='http://localhost:8080/api/quiz'

  user!: User

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  getQuizById(id_quiz: string): Observable<Quiz>{
    let url = `${this.apiUrl}/${id_quiz}`;
    return this.httpClient.get<Quiz>(url);
  }

  getRandomQuestionByQuiz(id_quiz: string): Observable<Test>{
    let url = `${this.apiUrl}/random/${id_quiz}`
    console.log(this.httpClient.get<Test>(url))
    return this.httpClient.get<Test>(url);
  }
}
