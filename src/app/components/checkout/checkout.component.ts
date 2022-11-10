import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products : any = [];
  grandTotal : number = 0;

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      
      // Applies discount on the grand total if the total exceeds $50
        if ( this.grandTotal >= 50 ){
          this.grandTotal -= this.grandTotal*0.1
        }
      })
    } 
    
}
