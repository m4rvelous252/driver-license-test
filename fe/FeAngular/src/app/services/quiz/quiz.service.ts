import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { Quiz } from 'src/app/model/quiz';
import { HOSTNAME } from 'src/app/model/constants';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl =`${HOSTNAME.backend}/api/quiz`
  user!: User

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  getQuizById(id_quiz: string): Observable<Response>{
    let url = `${this.apiUrl}/${id_quiz}`;
    return this.httpClient.get<Response>(url);
  }

  getRandomQuestionByQuiz(id_quiz: string): Observable<Response>{
    let url = `${this.apiUrl}/random/${id_quiz}`
    return this.httpClient.get<Response>(url);
  }
}
