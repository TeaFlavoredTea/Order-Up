import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  baseURL: string = 'http://localhost:3000/food'

  constructor(private http: HttpClient) { }

  getFoods(){
     return this.http.get<any[]>(this.baseURL)
  }
  
}
