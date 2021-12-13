import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDataService } from '../services/address-data.service';
import { CardDataService } from '../services/card-data.service';
import { UserDataService } from '../services/user-data.service';
import { UserDetailsDataService } from '../services/user-details-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name!: string
  username!: string
  password!: string
  confirmPassword!: string

  userAlreadyExists!: boolean

  constructor(private userService: UserDataService,
    private addressService: AddressDataService,
    private cardService: CardDataService,
    private userDetailsService: UserDetailsDataService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userAlreadyExists = false
  }

  doRegister(){

    
    this.userService.getUsers().subscribe((response) => {
      
      // Check to see if this user already exists
      this.userAlreadyExists = false
      for (var user of response) {
        if (user.id == this.username) {
          this.userAlreadyExists = true
          break;
        }
      }

      // User does not already exist, try to add the user
      if (!this.userAlreadyExists) {
        let user = {
          id: this.username,
          password: this.password,
          name: this.name
        }

        // Create an entry in DB tables for this user, should probably be a backend operation though
        this.userService.addUser(user).subscribe()
        this.addressService.addUser(this.username).subscribe()
        this.cardService.addUser(this.username).subscribe()
        this.cardService.addUser(this.username).subscribe()
        this.userDetailsService.addUser(this.username).subscribe()

        // Let the user test their ner credentials
        this.router.navigate(['login'])
      }

    })  
  }
}
