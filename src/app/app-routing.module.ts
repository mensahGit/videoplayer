import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';

//import {ClientService} from './services/client.service';
//import {AuthService} from './services/auth.service';

//import { AngularFireAuth } from 'angularfire2/auth';
//import {AngularFireAuthModule} from 'angularfire2/auth';
//import {AuthGuard} from './guards/auth.guard';

const appRoutes:Routes = [
  {path:'', component: NavComponent},
  {path:'nav', component: NavComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
