import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child2Component } from './child2/child2.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { RedElDirective } from './red-el.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    UserDetailsComponent,
    Child2Component,
    UsdInrPipe,
    RedElDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
