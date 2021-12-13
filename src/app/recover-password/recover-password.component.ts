import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  username!: string
  displayInvalidUser!: boolean
  displayEmailSent!: boolean

  constructor(private service: UserDataService) { }

  ngOnInit(): void {
    this.displayInvalidUser = false
    this.displayEmailSent = false
  }

  doRecoverPassword(){
     //Can the server find a matching user?
     this.service.getUsers().subscribe((response) => { // Yes, validate it
      
      // Find the user if it exsits, then redirect to the home page.
      for (var user of response) {
        if (user.id == this.username) {
          this.displayEmailSent = true // Found the user's email
          this.displayInvalidUser = false
        }
      }
      
      if (!this.displayEmailSent) {
        this.displayInvalidUser = true
      }

    })
  }

}
