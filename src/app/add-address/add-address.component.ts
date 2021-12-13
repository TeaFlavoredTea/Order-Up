import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDataService } from '../services/address-data.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addrName!: string
  addrBody!: string
  currentUser!: string
  userAdresses!: any[]


  constructor(private router: Router, private service: AddressDataService) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user
    
    this.fetchAddresses()
  }

  fetchAddresses(){
    this.service.getAddresses(this.currentUser).subscribe((response) => {
      this.userAdresses = response.addresses
    })
  }

  doAddAddress(){
    this.userAdresses.push(
      {
        id: this.userAdresses.length, //THIS IS THE WRONG WAY TO ASSIGN AN ID, IT SHOULD BE MADE FROM A HASH OF THE DATA
        name: this.addrName,
        address: this.addrBody
      })
      this.service.setAddresses(this.currentUser, this.userAdresses).subscribe()
      this.router.navigate(['addressList'])
  }

}
