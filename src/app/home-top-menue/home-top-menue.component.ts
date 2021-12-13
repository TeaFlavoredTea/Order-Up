import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-top-menue',
  templateUrl: './home-top-menue.component.html',
  styleUrls: ['./home-top-menue.component.css']
})
export class HomeTopMenueComponent implements OnInit {

  user!: String | null

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user')
  }

  goToHome(){
    this.router.navigate(['home'])
  }

  goToCart(){
    this.router.navigate(['cart'])
  }
  
  goToTrackOrder(){
    this.router.navigate(['trackOrder'])
  }

  goToProfile(){
    this.router.navigate(['profile'])
  }
  
  goToSettings(){
    this.router.navigate(['settings'])
  }
  
  goToLogout(){

    localStorage.removeItem('user')
    this.router.navigate(['login'])
  }
  

}
