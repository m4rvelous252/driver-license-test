import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Question} from '../../model/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private apiUrl ='http://localhost:8080/api/question'

  constructor(private httpClient: HttpClient) { }

  getQuestions(): Observable<Question[]>{
    return this.httpClient.get<Question[]>(this.apiUrl);
  }
}
