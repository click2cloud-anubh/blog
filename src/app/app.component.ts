import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Loops, Style-Binding';
  users= ['Rohit','Ram', 'Shanu', 'Hrithik', 'Hari'];
  userDetails = [
    {name: 'Rohit', email: 'rohit@gmail.com', phone: '13443'},
    {name: 'Ram', email: 'ram@gmail.com', phone: '12354'},
    {name: 'Hrithik', email: 'hrithik@gmail.com', phone: '12153'},
    {name: 'Hari', email: 'hari@gmail.com', phone: '34234'}
  ];
  userDetails2 = [
    {name: 'Rohit', email: 'rohit@gmail.com', socialAccounts: ['facebook', 'twitter', 'in']},
    {name: 'Ram', email: 'ram@gmail.com', socialAccounts: ['inst', 'fb', 'gmail']},
    {name: 'Hrithik', email: 'hrithik@gmail.com', socialAccounts: ['gmaill', 'yahoo', 'inSTA']},
    {name: 'Hari', email: 'hari@gmail.com', socialAccounts: ['facebook', 'insta', 'in']}
  ];
  
  color= "green";
  bgcolor= "red";

  updateColor() {
    this.color = "blue";
    this.bgcolor = "green";
  }
}
