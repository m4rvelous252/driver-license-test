import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Test} from '../../model/test';
import { Route } from '@angular/compiler/src/core';
<<<<<<< HEAD
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/user';
import { HOSTNAME, KEY } from 'src/app/model/constants';
=======
import { ActivatedRoute, Params, RouterModule } from '@angular/router';
import { User } from 'src/app/model/User';
import { KEY } from 'src/app/model/constants';
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
import { Result } from 'src/app/model/result';

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

<<<<<<< HEAD
  private apiUrl =`${HOSTNAME.backend}/api/quiz`

  private apiUrlTest =`${HOSTNAME.backend}/api/historytest/submitTest`

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) { }
=======
  private apiUrl ='http://localhost:8080/api/quiz'

  private apiUrlTest ='http://localhost:8080/api/historytest/submitTest'

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71

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

  submitTest(test: Test) {
    localStorage.removeItem(KEY.test)
    console.log(test)
    this.httpClient.post<Result>(this.apiUrlTest,test).subscribe((result)=>(
<<<<<<< HEAD
      localStorage.removeItem(KEY.result),
      localStorage.setItem(KEY.result,JSON.stringify(result)),
      this.router.navigate(['/result'])
=======
      localStorage.setItem(KEY.result,JSON.stringify(result)),
      console.log(result)
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71
      ));
  }

}
