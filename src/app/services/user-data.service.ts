import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  baseURL: string = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  getUsers(){
     return this.http.get<any[]>(this.baseURL)
  }

  getUser(id: string){
    return this.http.get<any>(this.baseURL + '/' + id)
  }

  addUser(user: any){
    return this.http.post<any>(this.baseURL, user)
  }
}
