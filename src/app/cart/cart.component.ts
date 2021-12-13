import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartLocalStorageService } from '../services/cart-local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems!: any
  totalCost = 0

  constructor(private router: Router, private service: CartLocalStorageService) { }

  ngOnInit(): void {
    let cartData = this.service.getCartItems()
    this.cartItems = cartData.items 

    if (this.cartItems != null) {
      let runningTotal = 0
      for(let i = 0; i < this.cartItems.length; i++) {
        runningTotal += +this.cartItems[i].price
      }
      this.totalCost = runningTotal
    }
  }

  clearCart() {
    this.service.clearCart()
  }

  placeOrder(){
    this.service.sendOrder()
    this.router.navigate(['trackOrder'])
  }

  goHome(){
    this.router.navigate(['home'])
  }

}
