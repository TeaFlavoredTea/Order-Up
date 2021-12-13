import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsDataService {

  baseURL: string = 'http://localhost:3000/userDetails'

  constructor(private http: HttpClient) { }

  addUser(username: string){
    let userDetailsObject = {
      id: username,
      phoneNumber: "",
      profession: "",
      imageURL: "https://image.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1365533969.jpg"
    }

    return this.http.post<any>(this.baseURL, userDetailsObject)
  }

  getUserDetails(id: string | null){
    return this.http.get<any>(this.baseURL + '/' + id)
  }
}
