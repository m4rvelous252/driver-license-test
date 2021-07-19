import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Category } from 'src/app/model/category';
import { HOSTNAME } from 'src/app/model/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${HOSTNAME.backend}/api/category`

  constructor(private http:HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl)
  }
  getCategory(id_category:string): Observable<Category> {
    let url = `${this.apiUrl}/${id_category}`
    return this.http.get<Category>(url)
  }
}
