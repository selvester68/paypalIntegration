import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductList } from '../model/ProductList';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = ProductList;
  constructor(private globalService: GlobalService) { }

  OnProductChange(event) {
    console.log(event.option.value);
    this.globalService.setSelectedProduct(event.option.value)
  }

  ngOnInit(): void {
  }

}
