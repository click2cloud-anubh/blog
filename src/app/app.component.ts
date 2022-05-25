import { isNgTemplate, ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Template Reference Variable & Basic Pipes';
  today= Date();

  user= {
    name:'Anubh',
    age: 21
  }

  getVal(item: HTMLInputElement){
    console.warn(item);
  }

  capString(item: string) {
    return item.toUpperCase();
  }
}
