import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any = [];

  constructor(private api: ApiService, private cartService: CartService) {}

  // Looping through the product list array and adding quantity and total price field
  ngOnInit(): void {
    // Subscribing to the getProducts as returns an observable
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        let item = a;
        item.quantity = 1;
        item.total = a.price;
        return item;
      });
    });
  }

  // Uses the services to add items to the cart
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
