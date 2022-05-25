import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Multiple conditions';
  name="Parker";
  disabled = false;
  show = 'yes';
  color = 'green';
}
