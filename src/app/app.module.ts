import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddfacaltyComponent } from './addfacalty/addfacalty.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';
import { ViewfacaltyComponent } from './viewfacalty/viewfacalty.component';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  
  {
    path:"add",component:AddstudentComponent
  },
  {
    path:"addFacalty",component:AddfacaltyComponent
  },
  {
    path:"viewstudent",component:ViewstudentComponent
  },
  {
    path:"viewfacalty",component:ViewfacaltyComponent
  },
  {
    path:"home",component:HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddstudentComponent,
    AddfacaltyComponent,
    LoginComponent,
    ViewstudentComponent,
    ViewfacaltyComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
