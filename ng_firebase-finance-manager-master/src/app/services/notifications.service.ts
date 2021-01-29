import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';

@Injectable()

export class NotificationsService {

	public notification: Subject<string> = new Subject();
    
    notifications: any[];
    selectedNotification: any;
	
 	constructor(private snackbar: MatSnackBar) {
		this.notifications = [
            {
                id: 1,
                title: 'Notification One',
                description: 'This is the first notification',
                read: false
            },
            {
                id: 2,
                title: 'Notification Two',
                description: 'This is second first notification',
                read: true
            }
        ];
	}
	
	showNotification(message: string, action: string) {
		this.snackbar.open(message, action, {
			duration: 5000
		})
	}

}