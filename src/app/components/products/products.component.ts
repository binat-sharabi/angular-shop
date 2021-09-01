import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-data/mock-products';
import { product } from 'src/app/types/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() productsList?:product[];

  ngOnInit(): void {
  }

}
