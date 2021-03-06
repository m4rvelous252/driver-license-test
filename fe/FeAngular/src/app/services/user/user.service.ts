import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of, Subject} from 'rxjs';
import {User} from '../../model/user';
import { HOSTNAME } from 'src/app/model/constants';
import { Response } from 'src/app/model/response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl =`${HOSTNAME.backend}/api/user`
  private subject = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  login(user : User):Observable<Response>{
    const url = `${this.apiUrl}/login`
    return this.httpClient.post<Response>(url,user);
  }

  getUserByUsername(user : User):Observable<User>{
    const url = `${this.apiUrl}/getUser`
    return this.httpClient.post<User>(url,user);
  }

  registerUser(user?: User):Observable<User>{
    console.log(user)
    const url = `${this.apiUrl}/register`
    return this.httpClient.post<User>(url,user);
  }
}
