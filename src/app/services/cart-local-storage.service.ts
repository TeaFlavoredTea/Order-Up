import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartLocalStorageService {

  myFoodOrbCart: string = 'myFoodOrbCart'

  constructor() { }

  public addItemToCart(item: any) {
    let currentCart = localStorage.getItem(this.myFoodOrbCart)
    
    // Does the cart exist?
    if (currentCart == null) {  // No, so it must be created
      
      // Create cart member
      let itemsInCart = [item]

      // Creating cart object
      let cart = {
        items: itemsInCart
      }

      // Store the cart as json data locally
      localStorage.setItem(this.myFoodOrbCart, JSON.stringify(cart));
    }
    else {  // Yes, so we add to it
      let cart = JSON.parse(currentCart)
      if(cart.items != null){
        cart.items.push(item)
      }
      else {
        cart.items = [item]
      }
      
      localStorage.setItem(this.myFoodOrbCart, JSON.stringify(cart));
    }
  }

  public getCartItems() {

    // Get the cart data
    let cartData = localStorage.getItem(this.myFoodOrbCart)
    
    let cartObj
    // Did we find a cart?
    if ( cartData != null) {  // Yes, parse the json data
      cartObj = JSON.parse(cartData)
    }
    else {  // No, so return a cart object with an empty items array
      cartObj = {
        items: []
      }
    }

    return cartObj
  }

  public clearCart(){
    localStorage.setItem(this.myFoodOrbCart, JSON.stringify({ items: null}));
  }

  public sendOrder() {
    this.clearCart()  // This is only for demo. Real world would need some kind of backend call here
  }

}
