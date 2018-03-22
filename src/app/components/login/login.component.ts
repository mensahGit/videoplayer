import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  mLogo:string = "/assets/images/logoTeeth_grapes.png";

  constructor(
    private authService:AuthService,
    private router:Router,
    private _fMS:FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
    .then((res) => {
      this._fMS.show('You are logged in...',
              { cssClass: 'alert-success',
              timeoute:4000});
      this.router.navigate(['/']);
    })
    .catch((err) => {
      this._fMS.show(err.message,
              {cssClass: 'alert-danger',
              timeout:4000});
      this.router.navigate(['/login']);
    });
  }

}
