import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable,of} from 'rxjs';
import {type, Type} from '../../model/type';
import { HOSTNAME } from 'src/app/model/constants';
import { Response } from 'src/app/model/response';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private httpClient: HttpClient,private route: ActivatedRoute,
    private router: Router,) { }

  getTypes(): Observable<Response>{
    return this.httpClient.get<Response>(this.apiUrl);
  }


  getTypeQuestions(id_type:string): Observable<Response>{
    let url = `${this.apiUrl}/${id_type}`
    return this.httpClient.get<Response>(url)
  }
  
  addType(newType: type){
    let url = `${this.apiUrl}/add`
    let link
    this.httpClient.post<Response>(url,newType).subscribe((res)=>(
      console.log(res),
      link =  `type/`+res.data.id,
      this.router.navigate([link])
    ));
  }
}
