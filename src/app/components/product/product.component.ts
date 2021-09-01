import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/types/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:product | null=null;

  ngOnInit(): void {
  }

}
