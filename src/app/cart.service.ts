import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './models';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart = new Cart([]);

  constructor(
    private http: HttpClient
  ) {}

  getCart() {
    return this.cart;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}

