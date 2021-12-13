import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  baseURL: string = 'http://localhost:3000/cards'

  constructor(private http: HttpClient) { }

  addUser(username: string){
    let cardObj = {
      id: username,
      cards: []
    }
    return this.http.post<any>(this.baseURL, cardObj)
  }

  getCards(id: string | null){
    return this.http.get<any>(this.baseURL + '/' + id)
  }

  // The way the json is set up requires this the be the function that eventually deletes specific card entries
  setCards(id: string, cards: any[]){
    
    let newCards = {
      id: id,
      cards: cards
    }

    return this.http.put<any>(this.baseURL + '/' + id, newCards)
  }

}
