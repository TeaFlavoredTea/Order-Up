import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressDataService } from '../services/address-data.service';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  cardId!: string | null
  cardIdIndex!: number
  cardName!: string
  cardNumber!: string
  currentUser!: string
  userCards!: any[]

  constructor(private router: Router, private activeRout: ActivatedRoute, private service: CardDataService) { }

  ngOnInit(): void {
    // Fetch the logged in user
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user
    
    // Get card data
    this.service.getCards(this.currentUser).subscribe((response) => {
      this.userCards = response.cards
      
      // What card should we edit?
      this.cardId = this.activeRout.snapshot.paramMap.get('id')

      // Pre-load the card data
      this.cardIdIndex = this.userCards.findIndex(
        elm => elm.id == this.cardId )
      if (this.cardIdIndex === -1) {
        console.error('Error, cannot find address with id ' + this.cardId + '. Cannot edit null card!')
      }
      this.cardName = this.userCards[this.cardIdIndex].name
      this.cardNumber = this.userCards[this.cardIdIndex].cardNumber
    })
  }

  doEditCard(){
    // Update the card data using the user input
    this.userCards[this.cardIdIndex] = {
      id: this.cardId,
      name: this.cardName,
      cardNumber: this.cardNumber
    }

    // Send the updated data to the server
    this.service.setCards(this.currentUser, this.userCards).subscribe()
    this.router.navigate(['cardList'])
      
  }

}
