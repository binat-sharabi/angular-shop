import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-shop-client';
  isShow:boolean= false;

  toogle(){
    (this.isShow?
    console.log("show"):
    console.log("hidden"))
    this.isShow=!this.isShow
  }
}
