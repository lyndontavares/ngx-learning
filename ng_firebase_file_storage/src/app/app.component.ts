import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JavaSampleApproach';
  description = 'Angular-Firebase Demo';

  constructor(
    public fire: AngularFireAuth) {
    this.login();
  }

  login() {
    this.fire.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.fire.auth.signOut();
  }


}
