import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  massageList?:string[];

  add(massage:string){
    this.massageList=[...massage];
  }

  clear(){
    this.massageList=[];
  }
}
