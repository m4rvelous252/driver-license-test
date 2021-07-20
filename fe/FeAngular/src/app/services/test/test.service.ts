import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Test} from '../../model/test';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import { User } from 'src/app/model/user';
import { HOSTNAME, KEY } from 'src/app/model/constants';
import { Result } from 'src/app/model/result';
import { Response } from 'src/app/model/response';

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

  res!: Response

  private apiUrlQuiz =`${HOSTNAME.backend}/api/quiz`

  private apiUrlTest =`${HOSTNAME.backend}/api/historytest/submitTest`

  constructor(private httpClient: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  private apiUrl =`${HOSTNAME.backend}/api/historytest`

  getRandomQuestionByQuiz(id_quiz: string): Observable<Response>{
    let url;
    url = `${this.apiUrlQuiz}/random/${id_quiz}`
    return this.httpClient.get<Response>(url);
  }

  submitTest(test: Test) {
    let url=`${this.apiUrl}/submitTest`
    localStorage.removeItem(KEY.test)
    console.log(test)
    this.httpClient.post<Response>(url,test).subscribe((result)=>(
      console.log(result),
      localStorage.removeItem(KEY.result),
      localStorage.setItem(KEY.result,JSON.stringify(result.data)),
      this.router.navigate(['/result'])
      ));
  }

  getHistoryTestOfUser():Observable<Response>{
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;
    let url=`${this.apiUrl}/user/${this.user.id}`
    return this.httpClient.get<Response>(url);
  }

  getHistoryTestById(id_test: string){
      let url=`${this.apiUrl}/${id_test}`
      return this.httpClient.get<Response>(url).subscribe((result)=>(
        this.res = result,
        localStorage.removeItem(KEY.result),
        localStorage.setItem(KEY.result,JSON.stringify(this.res.data)),
        this.router.navigate(['/result'])
        ));
  }

}
