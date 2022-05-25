import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Loops, Style-Binding';
  userData: any = {};

  display: boolean = false;


  getData(data: NgForm) { 
    console.warn(data);
    this.userData = data;
  }

  toggle() {
    this.display= !this.display;
  }
}
