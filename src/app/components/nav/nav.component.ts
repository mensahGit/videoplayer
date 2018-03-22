
import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from '../../models/Client';
import  'rxjs/add/operator/map';
//import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  showRegister: boolean;

  constructor(
    private clientService: ClientService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    //private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });

    //this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onLogoutClick() {
     this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success', timeout: 4000
    });
    this.router.navigate(['/login']);
  } 
  }