import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { Quiz } from 'src/app/model/quiz';
import { HOSTNAME } from 'src/app/model/constants';
import { Response } from 'src/app/model/response';
import { QuizType } from 'src/app/model/quiztype';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl =`${HOSTNAME.backend}/api/quiz`

  user!: User

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,private router: Router) { }

  getQuizById(id_quiz: string): Observable<Response>{
    let url = `${this.apiUrl}/${id_quiz}`;
    return this.httpClient.get<Response>(url);
  }

  getRandomQuestionByQuiz(id_quiz: string): Observable<Response>{
    let url = `${this.apiUrl}/random/${id_quiz}`
    return this.httpClient.get<Response>(url);
  }

  async addNewQuiz(quiz : Quiz){
    let url = `${this.apiUrl}/add`;
    let link
    let id_quiz : number
    await this.httpClient.post<Response>(url,quiz).toPromise().then((res)=>(
      id_quiz = res.data.id
    ));
    link =  `quiz/`+id_quiz!
    this.router.navigate([link])
  }

  deleteQuiz(quiz : Quiz){
    let url = `${this.apiUrl}/${quiz.id}`
    this.httpClient.delete<Response>(url).subscribe((res)=>{})
  }

  getQuizDeletedByCategoryId(categoryId : number){
    let url = `${this.apiUrl}/category/${categoryId}/deleted`
    return this.httpClient.get<Response>(url);
  }

  getTopQuiz(page : number,amount : number): Observable<Response> {
    let url = `${this.apiUrl}/top?page=${page}&amount=${amount}`
    console.log(url)
    return this.httpClient.get<Response>(url)
  }

  getNewQuiz(page : number,amount : number): Observable<Response> {
    let url = `${this.apiUrl}/new?page=${page}&amount=${amount}`
    return this.httpClient.get<Response>(url)
  }

  getQuizNotDeletedByCategoryId(categoryId : number){
    let url = `${this.apiUrl}/category/${categoryId}/notdeleted`
    return this.httpClient.get<Response>(url);
  }

  redoQuiz(quiz : Quiz){
    let url = `${this.apiUrl}/restore/${quiz.id}`
    this.httpClient.put<Response>(url,quiz).subscribe()
  }
}
