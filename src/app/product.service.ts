import { Injectable } from '@angular/core';
import { Product } from './models';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products =  [
    new Product(1, 'Phone XL', 799, 'A large phone with one of the best screens'),
    new Product(2, 'Phone Mini', 699, 'A great phone with one of the best cameras'),
    new Product(3, 'Phone Standard', 299, '')
  ];

  constructor() {}

  findProductById(productId) {
    return this.products.find(product => product.id === productId);
  }

  getProducts() {
    return this.products;
  }

}

