import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Category } from 'src/app/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private allApiUrl = "http://localhost:8080/api/category"
  private ApiUrl = "http://localhost:8080/api/category/1"

  constructor(private http:HttpClient) { }

  getAllCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.allApiUrl)
  }
  getCategory(): Observable<Category> {
    return this.http.get<Category>(this.ApiUrl)
  }
}
