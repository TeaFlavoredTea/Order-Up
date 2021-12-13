import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartLocalStorageService } from '../services/cart-local-storage.service';
import { FoodDataService } from '../services/food-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  filteredFoods!: any
  foods!: any[]
  searchString!: string
  selectedItem!: any

  constructor(private router: Router, private service: FoodDataService, private cart: CartLocalStorageService) {
    this.selectedItem = {
      name: "",
      price: 0
    }
  }

  ngOnInit(): void {
    this.service.getFoods().subscribe((response) => {
      this.foods = response
      this.filteredFoods = this.foods
    })
  }

  filterProducts(){
    this.filteredFoods = []

    for(let item of this.foods) {
      if (item.name.toLowerCase().indexOf(this.searchString.toLocaleLowerCase()) != -1) {
        this.filteredFoods.push(item)
      }
    }
  }

  selectItem(item: any) {
    this.selectedItem = item
  }

  addToCart(){
    this.cart.addItemToCart(this.selectedItem)
  }

  buyNow(item: any){
    this.cart.addItemToCart(item)
    this.router.navigate(['cart'])
  }

}
