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

  getTopCategory(page : number,amount : number): Observable<Response> {
    let url = `${this.apiUrl}/top?page=${page}&amount=${amount}`
    console.log(url)
    return this.http.get<Response>(url)
  }

  getNewCategory(page : number,amount : number): Observable<Response> {
    let url = `${this.apiUrl}/new?page=${page}&amount=${amount}`
    return this.http.get<Response>(url)
  }

  getCategory(id_category:string): Observable<Response> {
    console.log(id_category)
    let url = `${this.apiUrl}/${id_category}`
    return this.http.get<Response>(url)
    
  }
}
