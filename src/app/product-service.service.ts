import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  listProduct: Array<IProduct> = [
    {
      id: 1, name: 'Iphone', description: 'Apple'
    },
    {
      id: 2, name: 'Iphone1', description: 'Apple1'
    },
    {
      id: 3, name: 'Iphone2', description: 'Apple2'
    },
    {
      id: 4, name: 'Iphone3', description: 'Apple3'
    }
  ];

  constructor() {
  }

  getProduct(): Array<IProduct> {
    return this.listProduct;
  }

  getProductById(id: number): IProduct {
    return this.listProduct.find(item => item.id === id);
  }

  editProduct(id: number, product: IProduct): void {
    let productTem = this.getProductById(id);
    productTem = product;
  }
}
