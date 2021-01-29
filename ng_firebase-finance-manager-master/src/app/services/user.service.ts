import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of as observableOf, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AngularFirestore } from 'angularfire2/firestore';

import { NotificationsService } from './notifications.service';
import { AuthService } from './auth.service';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class UserService {
	
	titles: any[];
	
	user: any;

	constructor (private db: AngularFirestore, private http: HttpClient, private notifService: NotificationsService, private authService: AuthService) {
		this.titles = [
			'Mr',
			'Miss',
			'Mrs',
			'Ms',
			'Dr',
			'Prof'
		]

		this.user = this.authService.user;
	}
	
    updateProfile() {
		var photoUrl = 'http://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/durchschnittsgesichter/m(01-32).jpg';
		
        this.user.updateProfile({
            displayName: "Nick Cook",
            photoURL: photoUrl
		})
		.then(() => {
            this.notifService.showNotification('Profile updated', 'Close');
			console.log('User:', this.user);
		})
		.catch(error => {
            this.notifService.showNotification(`UserService.updateProfile() - Error updating profile: ${error}`, null);
        })
    }

}