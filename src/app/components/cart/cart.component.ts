import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products : any = [];
  grandTotal : number = 0;

  constructor(private cartService : CartService) { }

  // Initializing the products array and grandTotal from the services of cartService
  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
    } 

  // Uses services to remove the items from the cart
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

}
