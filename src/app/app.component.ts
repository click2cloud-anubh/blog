import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Send data Patent to Child and Reusable Component and data Child to Patent and 2-Way binding';
  data= 20;
  str= "Square";

  userDetails= [
    {name: "Anubh", email:'anubh@gmail.com'},
    {name: "Shanu", email:'shanu@gmail.com'},
    {name: "Raja", email:'raja@gmail.com'},
    {name: "Sonu", email:'sonu@gmail.com'},
  ]

  name: any;

  updateChild() {
    this.data= Math.floor(Math.random()*10);
  }

  updateData(item: string) {
    console.warn(item);
    this.str= item;
  }
}
