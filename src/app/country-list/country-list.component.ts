import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  template: `
    <h3 class="container custom" >
      country-list works!
</h3>
  `,
  styles: [`
    .custom {
      text-align: center;
      color: blue;
    }
  `]
})
export class CountryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
