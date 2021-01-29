import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

import { NotificationsService } from './notifications.service';

import { VerifyEmailDialogComponent } from '@app/register/dialogs/verify-email-dialog/verify-email-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';

@Injectable()

export class AuthService {
    
    public user: firebase.User;
    
    isAuthenticated: boolean = false;

	verifyEmailDialogRef: MatDialogRef<VerifyEmailDialogComponent>;

	constructor(public firebaseAuth: AngularFireAuth, private router: Router, private notifService: NotificationsService, private dialog: MatDialog) {
        
    }
    
    signIn(email: string, password: string) {
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                if (firebase.auth().currentUser.emailVerified) {
                    console.log('AuthService - Signed In');
                    this.isAuthenticated = true;
                    this.router.navigateByUrl('/dashboard');
                    this.notifService.showNotification(`Logged in as ${email}`, 'Close');
                    this.user = firebase.auth().currentUser;
                } else {
                    this.notifService.showNotification('You must verify your email using the link sent to your email address before signing in', 'Close');
                }
            })
            .catch(error => {
                console.error(`AuthService.signIn() - Error signing in: ${error.message}`);
				this.notifService.showNotification(`Sign-In Error: ${error.message}`, null);
            })
        
//        firebase.auth().onAuthStateChanged(user => {
//            if (user) {
//                this.isAuthenticated = true;
//                console.log('Login state persisted');
//            } else {
//                this.isAuthenticated = false;
//                console.log('Login state not persisted');
//            }
//        })
    }
    
    signInGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
    }
    
    signOut() {
        this.firebaseAuth
            .auth
            .signOut();
			this.notifService.showNotification('Signed out', null);
        this.isAuthenticated = false;
        this.router.navigateByUrl('/login');
        console.log('AuthService - Signed Out');
    }
    
    register(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('AuthService - Registration Successful', value);

                var user = firebase.auth().currentUser;

                user.sendEmailVerification()
                    .then(() => {
                        this.verifyEmailDialogRef = this.dialog.open(VerifyEmailDialogComponent, {
                            hasBackdrop: true
                        })
                    })
                    .catch(error => {
                        console.error(`AuthService.register() - Error sending verification email: ${error.message}`);
                        this.notifService.showNotification(`Error sending verification email: ${error.message}`, null);
                    })
             })
             .catch(error => {
                console.log(`AuthService.register() - Error registering account: ${error.message}`);
				this.notifService.showNotification(`Registration Error: ${error.message}`, null);
            })
    }

}
