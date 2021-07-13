import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Test} from '../../model/test';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { User } from 'src/app/model/User';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  id_quiz?: string
  user!: User

  private apiUrl ='http://localhost:8080/api/historytest'


  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  getRandomQuestionByQuiz(id_quiz: string): Observable<Test>{
    let url;
    if(localStorage.getItem('user')!=null){
      const userJson = localStorage.getItem('user');
      this.user = userJson !== null ? JSON.parse(userJson) : null;
      url = `${this.apiUrl}/random/${id_quiz}/${this.user.id}`
      console.log(url)
    }else{
      url = `${this.apiUrl}/random/${id_quiz}`
    }
    return this.httpClient.get<Test>(url);
  }

}
