import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

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
    console.log('current user: ' + user)

    this.fetchCards()
  }

  fetchCards() {
    this.service.getCards(this.currentUser).subscribe((response) => {
      this.userCards = response.cards
    })
  }

  doAddCard(){
    this.router.navigate(['addCard'])
  }

  doEditCard(id: string) {
    this.router.navigate(['editCard', id])
  }

  doDeleteCard(addressId: string) {
    let cardIndex = this.userCards.findIndex( elm => elm.id == addressId)
    this.userCards.splice(cardIndex, 1)
    this.service.setCards(this.currentUser, this.userCards).subscribe( res => {
      this.fetchCards()
    })
  }

}
