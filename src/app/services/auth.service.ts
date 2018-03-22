import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { Observable } from 'rxjs';


@Injectable()

export class AuthService {

constructor(public afAuth:AngularFireAuth){}

login(email:string, password:string){

return new Promise((resolve, reject) => {
this.afAuth.auth.signInWithEmailAndPassword(email, password)
.then(userData => resolve(userData),
err => reject(err));
});

}
///IN 'AUTH.SERVICES.TS', PLACE..., ///
//CHECK USER STATUS//
getAuth(){
  return this.afAuth.authState.map(auth => auth);
  }

    //LOGOUT USER
     logout(){
      this.afAuth.auth.signOut();
      } 
    
      //REGISTER USER
      /* register(email:string, password:string){
        return new Promise((resolve, reject) => {
          this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then(userData => resolve(userData),
            err => reject(err));
          });
      } */
      
    }