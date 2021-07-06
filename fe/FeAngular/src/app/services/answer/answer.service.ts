import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Answer } from 'src/app/model/answer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  answers: number[] = [];
  private answerUrl = "http://localhost:5000/answer"

  constructor(private http:HttpClient) { }

  addAnswer(selectAnswer: Answer): Observable<Answer> {
    return this.http.post<Answer>(this.answerUrl, selectAnswer, httpOptions )
  }

  removeAnswer(unselectAnswer: Answer): Observable<Answer> {
    const url = `${this.answerUrl}/${unselectAnswer.id}`;
    return this.http.delete<Answer>(url);
  }

  getAnswer(): Observable<Answer[]> {
    return this.http.get<Answer[]>(this.answerUrl);
  }
}
