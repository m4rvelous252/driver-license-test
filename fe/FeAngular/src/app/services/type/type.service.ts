import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Type} from '../../model/Type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private apiUrl ='http://localhost:8080/api/type'


  private apiTypeUrl = 'http://localhost:8080/api/type/1'

  constructor(private httpClient: HttpClient) { }

  getTypes(): Observable<Type[]>{
    return this.httpClient.get<Type[]>(this.apiUrl);
  }


  getTypeQuestions(): Observable<Type>{
    return this.httpClient.get<Type>(this.apiTypeUrl)
  }
}
