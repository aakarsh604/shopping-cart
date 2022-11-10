import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
}) 
export class CartService {

  cartItemList : any = [];
  cartId : number[] = [];
  productList = new BehaviorSubject<any>([]);

  constructor() { }

  // Function to return the cartList as observables
  getProducts(){
    return this.productList.asObservable();
  }

  // Function to add items to the cart
  addtoCart(product : any){
    // If the product is already added to the cart, returns an alert
    if ( this.cartId.includes(product.id) ) return alert("Item already added to cart")
    this.cartId.push(product.id)

    // Otherwise adds the product to the cartList
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    alert("Product added to cart!");
  }

  // Function to get the total price of the cart
  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a : any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  } 

  // Function to remove an item form the cart
  removeCartItem(product : any){
    this.cartId = this.cartId.filter((e:number)=> e != product.id)
    this.cartItemList.map((a:any, index:any) => {
      if ( product.id === a.id ){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  // Function to empty the cart
  removeAllCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
