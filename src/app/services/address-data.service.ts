import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressDataService {

  baseURL: string = 'http://localhost:3000/address'

  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  addUser(username: string){
    let addressObj = {
      id: username,
      addresses: []
    }
    return this.http.post<any>(this.baseURL, addressObj)
  }

  getAddresses(id: string | null){
     return this.http.get<any>(this.baseURL + '/' + id)
  }

  // The way the json is set up requires this the be the function that deletes address entries
  setAddresses(id: string, addresses: any[]){
    
    let newAddresses = {
      id: id,
      addresses: addresses
    }

    return this.http.put<any>(this.baseURL + '/' + id, newAddresses)
  }
  
}
