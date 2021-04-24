import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  product: Product;

  constructor(private globalService: GlobalService) { }

  openDrawer(drawer) {
    this.product = this.globalService.getSelectedProduct();
    if (this.product) {
      drawer.open();
    } else {
      alert("Please select PRoduct first")
    }
  }
  ngOnInit(): void {
  }

}
