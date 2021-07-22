import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Category } from 'src/app/model/category';
import { HOSTNAME } from 'src/app/model/constants';
import { Response } from 'src/app/model/response';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${HOSTNAME.backend}/api/category`

  constructor(private http:HttpClient) { }

  getAllCategory(): Observable<Response> {
    return this.http.get<Response>(this.apiUrl)
  }

  getCategory(id_category:string): Observable<Response> {
    let url = `${this.apiUrl}/${id_category}`
    return this.http.get<Response>(url)
  }

  getAllCategoryByUser(id_user : string): Observable<Response> {
    let url = `${this.apiUrl}/user/${id_user}`
    return this.http.get<Response>(this.apiUrl)
  }

}
