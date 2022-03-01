import { Component } from '@angular/core';

import { products } from '../products';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products:Product = [
    {
      name: "太郎",
      price: 500,
      description: "ああああ",
    },
    {
    name: "次郎",
    price: 100,
    description: "あああ"
    }
  ]


  share() {
    window.alert('The product has been shared!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
