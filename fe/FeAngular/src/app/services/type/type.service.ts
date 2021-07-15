import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {Type} from '../../model/type';
<<<<<<< HEAD
import { HOSTNAME } from 'src/app/model/constants';
=======
>>>>>>> 1bb7878c6c0a977d0bf1c4ec2005d722359bac71

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private apiUrl =`${HOSTNAME.backend}/api/type`

  constructor(private httpClient: HttpClient) { }

  getTypes(): Observable<Type[]>{
    return this.httpClient.get<Type[]>(this.apiUrl);
  }


  getTypeQuestions(id_type:string): Observable<Type>{

    let url = `${this.apiUrl}/${id_type}`
    return this.httpClient.get<Type>(url)
  }
}
