import { productsUrl } from './../config/api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // Function to fetch all the given products list from the json
  getProduct() {
    return this.http.get<any>(productsUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
