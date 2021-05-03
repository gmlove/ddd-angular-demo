
export class Product {
  constructor(public id: Number, public name: String, public price: Number, public description: String) {}
}

export class Cart {

  constructor(private items: Product[]) {}

  add(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clear() {
    this.items = [];
    return this.items;
  }
}

