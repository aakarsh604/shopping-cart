import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
  
@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  products : any = [];
  grandTotal : number = 0;
  //invoice number
  invoiceNo : string = (Math.random()*80000000).toFixed();
  //purchase date
  date = new Date().toLocaleDateString()
  //purchase time
  time = new Date().toLocaleTimeString()

  constructor(private cartService : CartService, private router : Router) { }

  ngOnInit(): void {
      this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      })
    } 

    // Empty's the cart after purchase and redirects to the products page
    continueShop(){
      this.cartService.removeAllCart();
      this.router.navigate(["/products"]);
    }
}
