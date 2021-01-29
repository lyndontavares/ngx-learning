import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '@app/router-animations';

import { AngularFirestore } from 'angularfire2/firestore';

import { AuthService } from '@app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
      // animations: [
      //       fadeInAnimation
      // ],
      // host: { '[@fadeInAnimation]': '' }
})

export class LoginComponent implements OnInit {
    
    email: string;
    password: string;

	constructor(public db: AngularFirestore, public authService: AuthService, private router: Router) {

    }

	ngOnInit() {
		
	}

}
