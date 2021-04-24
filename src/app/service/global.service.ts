import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private selectedProduct: Product;

  constructor() { }

  setSelectedProduct(product) {
    this.selectedProduct = product;
  }
  getSelectedProduct() {
    return this.selectedProduct;
  }
}
