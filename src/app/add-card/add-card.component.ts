import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  cardName!: string
  cardNumber!: string
  currentUser!: string
  userCards!: any[]


  constructor(private router: Router, private service: CardDataService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user
    
    this.fetchCards()
  }

  fetchCards(){
    this.service.getCards(this.currentUser).subscribe((response) => {
      this.userCards = response.cards
    })
  }

  doAddCard(){
    this.userCards.push(
      {
        id: this.userCards.length,
        name: this.cardName,
        cardNumber: this.cardNumber
      })
      this.service.setCards(this.currentUser, this.userCards).subscribe()
      this.router.navigate(['cardList'])
  }
}
