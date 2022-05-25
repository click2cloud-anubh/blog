import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  number= 10;
  data= "  Hi this is my first blog. Hope you like it!!!   ";

  displayVal: string= "";
  count=0;

  getData(name: any) {
    console.log(name);
    return name;
  }

  getValue(val: string) {
    console.log(val);
    this.displayVal= val;
  }

  counter(type: string) {
    if(type=='subtract')
      this.count--;
    else
      this.count++; 
  }
}
