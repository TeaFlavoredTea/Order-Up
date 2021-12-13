import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';
import { UserDetailsDataService } from '../services/user-details-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser!: string
  userName!: string
  userPhoto!: string
  userPhone!: string
  userProfession!: string

  constructor(private router: Router, private userService: UserDataService,private detailsService: UserDetailsDataService) { }

  ngOnInit(): void {
    // Fetch the logged in user
    let user = localStorage.getItem('user')

    // Is there a user logged in?
    if ( user == null) {  // No, go back to login
      user = ''
      this.router.navigate(['login'])
    }
    this.currentUser = user

    // Fetch user details data
    this.detailsService.getUserDetails(this.currentUser).subscribe((response) => {
      let userDetails = response
      this.userPhoto = userDetails.imageURL
      this.userPhone = userDetails.phoneNumber
      this.userProfession = userDetails.profession
    })

    // Fetch user data
    this.userService.getUser(this.currentUser).subscribe((response) => {
      this.userName = response.name
    })
  }



}
