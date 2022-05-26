import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Template Reference Variable & Basic Pipes';
  // today= Date();

  // user= {
  //   name:'Anubh',
  //   age: 21
  // }

  // getVal(item: HTMLInputElement){
  //   console.warn(item);
  // }

  // capString(item: string) {
  //   return item.toUpperCase();
  // }

  // userLogin(item: any) {
  //   console.warn(item);
  // }
  // -----------------------------------------------------
  // loginForm= new FormGroup({
  //   user: new FormControl(''),
  //   password: new FormControl('')
  // });

  // loginUser() {
  //   console.warn(this.loginForm.value);
  // }

  // ----------------------------------------------------------

  loginForm= new FormGroup({
    // Validators.email, 
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('',  [Validators.required, Validators.minLength(5)])
  })

  loginUser() {
    console.warn(this.loginForm.value);
  }

  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
