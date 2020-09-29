import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductServiceService} from '../product-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductServiceService) {
    this.getAllProduct();
  }

  ngOnInit(): void {
  }

  getAllProduct(): void {
    this.products = this.productService.getProduct();
  }
}
