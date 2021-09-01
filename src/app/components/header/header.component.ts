import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { groupBy } from 'rxjs/internal/operators/groupBy';
import { PRODUCTS } from 'src/app/mock-data/mock-products';
import { product } from 'src/app/types/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories:string[]= [...new Set(PRODUCTS.map(item=>item.category))];
  selectedCategory:string="AllProducts";

  @Output() filterByCategory=new EventEmitter<string>();

  ngOnInit(): void {
  }

  OnSelect(category:string){
    this.filterByCategory.emit(category);
  }

}
