import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from '../mock-data/mock-products';
import { product } from '../types/product';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private massageService:MessagesService) { }

  getProducts():Observable<product[]>{
    this.massageService.add("getProducts");
    return of(PRODUCTS);
  }
}
