import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDataService } from '../services/address-data.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {

  currentUser!: string
  userAdresses!: any[]

  constructor(private service: AddressDataService, private router: Router) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user
    console.log('current user: ' + user)

    this.fetchAddresses()
  }

  fetchAddresses(){
    this.service.getAddresses(this.currentUser).subscribe((response) => {
      this.userAdresses = response.addresses
    })
  }

  doAddAddress(){
    this.router.navigate(['addAddress'])
  }

  doEditAddress(id: string) {
    this.router.navigate(['editAddress', id])
  }

  doDeleteAddress(addressId: string) {
    let addrIndex = this.userAdresses.findIndex( elm => elm.id == addressId)
    this.userAdresses.splice(addrIndex, 1)
    this.service.setAddresses(this.currentUser, this.userAdresses).subscribe( res => {
      this.fetchAddresses()
    })
  }


}
