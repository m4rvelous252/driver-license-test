import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { User } from 'src/app/model/user';
=======
import { User } from 'src/app/model/User';
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Test } from 'src/app/model/test';
import { Quiz } from 'src/app/model/quiz';
<<<<<<< HEAD
import { HOSTNAME } from 'src/app/model/constants';
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71

@Injectable({
  providedIn: 'root'
})
export class QuizService {

<<<<<<< HEAD
  private apiUrl =`${HOSTNAME.backend}/api/quiz`
=======
  private apiUrl ='http://localhost:8080/api/quiz'

>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
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
