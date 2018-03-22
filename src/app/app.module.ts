import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';


import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireDatabase} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';


import {ClientService} from './services/client.service';
import {AuthService} from './services/auth.service';

import { AngularFireAuth } from 'angularfire2/auth';
//import {AngularFireAuthModule} from 'angularfire2/auth';
//import {AuthGuard} from './guards/auth.guard';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'videoapp'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ClientService, AuthService,/*AuthGuard,*/AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }