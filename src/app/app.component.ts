import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from './mock-data/mock-products';
import { ProductsService } from './services/products.service';
import { product } from './types/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-shop-client';
  category?:string;
  productList:product[]=[];

  constructor(private productsService:ProductsService){
    
  }

  ngOnInit(){
    this.productsService.getProducts().subscribe(data=>{this.productList=data.filter(item=>(item.category===this.category|| !this.category))});
  }


  FilterProducts(cat:any){
    this.productList=PRODUCTS.filter(item=>(item.category===cat|| !cat));
  }


  // isShow:boolean= false;

  // toogle(){
  //   (this.isShow?
  //   console.log("show"):
  //   console.log("hidden"))
  //   this.isShow=!this.isShow
  // }
}
