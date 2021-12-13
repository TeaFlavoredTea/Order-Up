import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressDataService } from '../services/address-data.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  addressId!: string | null
  addressIdIndex!: number
  addrName!: string
  addrBody!: string
  currentUser!: string
  userAdresses!: any[]


  constructor(private router: Router, private activeRout: ActivatedRoute, private service: AddressDataService) { }

  ngOnInit(): void {
    // Fetch the logged in user
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user
    
    // Get address data
    this.service.getAddresses(this.currentUser).subscribe((response) => {
      this.userAdresses = response.addresses
      
      // What address should we edit?
      this.addressId = this.activeRout.snapshot.paramMap.get('id')

      // Pre-load the address data
      this.addressIdIndex = this.userAdresses.findIndex(
        elm => elm.id == this.addressId )
      if (this.addressIdIndex === -1) {
        console.error('Error, cannot find address with id ' + this.addressId + '. Cannot edit null address!')
      }
      this.addrName = this.userAdresses[this.addressIdIndex].name
      this.addrBody = this.userAdresses[this.addressIdIndex].address
    })
  }

  doEditAddress(){
    // Update the address data from the user input
    this.userAdresses[this.addressIdIndex] = {
      id: this.addressId,
      name: this.addrName,
      address: this.addrBody
    }

    // Send the updated data to the server
    this.service.setAddresses(this.currentUser, this.userAdresses).subscribe()
    this.router.navigate(['addressList'])
      
  }


}
