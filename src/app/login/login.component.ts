import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string
  password!: string
  rememberLogin!: boolean

  displayInvalidLogin!: boolean  // Just used for HTML element display

  constructor(private router: Router, private service: UserDataService) { }

  ngOnInit(): void {
    this.displayInvalidLogin = false
  }

  doLogin(){
     //Can the server find a matching user?
    this.service.getUsers().subscribe((response) => { // Yes, validate it
      
      // Find the user if it exsits, then redirect to the home page.
      for (var user of response) {
        if (user.id == this.username && user.password == this.password) {
          
          // Check if the user wants to stay logged-in.
          if (this.rememberLogin === true){
            // Logic to stay logged in.
          }

          // remember that the user is logged in between page re-loads
          localStorage.setItem('user', this.username)

          // Redirect.
          this.router.navigate(['home'])
        }
      }
      
      this.displayInvalidLogin = true

    })  
  }

  toRecoverPassword(){
    console.log('redirecting to recover password')
    this.router.navigate(['recoverPassword'])
  }

}
