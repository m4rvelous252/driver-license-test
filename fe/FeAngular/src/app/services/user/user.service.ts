import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of, Subject} from 'rxjs';
import {User} from '../../model/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl ='http://localhost:8080/api/user'

  private subject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  login(user : User):Observable<User>{
    const url = `${this.apiUrl}/login`
    return this.httpClient.post<User>(url,user);
  }

  getUserByUsername(user : User):Observable<User>{
    const url = `${this.apiUrl}/getUser`
    return this.httpClient.post<User>(url,user);
  }

  registerUser(user?: User):Observable<User>{
    const url = `${this.apiUrl}/register`
    return this.httpClient.post<User>(url,user);
  }
}
