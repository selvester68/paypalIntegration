import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { render } from 'creditcardpayments/creditCardPayments'
import { Product } from '../model/product.model';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  product: Product
  priceDefault = '100';

  constructor(private router: Router, private globalService: GlobalService) {

  }
  getProduct() {
    this.product = this.globalService.getSelectedProduct();
  }
  renderPayPalButton(price: string) {
    render({
      id: "#paypalButton",
      currency: "USD",
      value: price,
      onApprove: (details) => {
        console.log(details);
        this.router.navigate(['success']);
      }
    });
  }

  ngOnInit(): void {
    this.getProduct();
    // this.renderPayPalButton(this.product.price.toString());
    this.renderPayPalButton(this.priceDefault);

  }

}
