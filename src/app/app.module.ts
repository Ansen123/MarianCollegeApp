import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacaltyComponent } from './addfacalty/addfacalty.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
const appRouts:Routes=[
  {
    path:"/",component:LoginComponent
  },
  {
    path:"add",component:AddstudentComponent
  },
  {
    path:"addFacalty",component:AddfacaltyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddstudentComponent,
    AddfacaltyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
