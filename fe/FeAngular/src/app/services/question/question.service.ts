import { Injectable } from '@angular/core';

import { Question } from 'src/app/model/question';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HOSTNAME } from 'src/app/model/constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questions: Question[]= [];
<<<<<<< HEAD
  private apiUrl = `${HOSTNAME.backend}/api/question`
=======
  private apiUrl = 'http://localhost:8080/api/question'
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
  // private answerUrl = "http://localhost:5000/answer"

  constructor(private http:HttpClient) { }

  getQuestions(): Observable<Question[]> {
    console.log(this.http.get<Question[]>(this.apiUrl))
    return this.http.get<Question[]>(this.apiUrl)

  }

  // submitQuiz(answeredQuestionId: number[]): Observable<number[]> {    
  //   console.log('submited')
  //   return this.http.post<number[]>(this.answerUrl, answeredQuestionId, httpOptions);

  // }



  // This works
  // submitQuiz(answeredQuestion: Question[]): Observable<Question[]> {
  //   console.log('submited')
  //   return this.http.post<Question[]>(this.answerUrl, answeredQuestion, httpOptions);
    
  // }

  // clearAnswer(){
  //   return this.http.delete<Question[]>(this.answerUrl)
  // }

}
