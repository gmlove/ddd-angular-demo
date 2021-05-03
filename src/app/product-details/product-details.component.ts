

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  product;


  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
  ) { }


  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.productService.findProductById(productIdFromRoute);
  }


  addToCart(product) {
    this.cartService.getCart().add(product);
    window.alert('Your product has been added to the cart!');
  }

}
