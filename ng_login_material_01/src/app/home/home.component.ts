import { Component, OnInit, AfterViewInit, OnChanges } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { AuthServiceFake } from '../auth/auth.service.fake';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div *ngIf="displayLogin">
      <app-login></app-login>
    </div>
    <div *ngIf="!displayLogin" class="centro">
      <span class="mat-display-1" >Angular 7 Auth/Gaurd</span>
      <br>
      {{user | json}}
      <br>
      <button mat-button (click)="sair()">Logout</button>
      </div>
    `,
})
export class HomeComponent implements OnInit {
  private _displayLogin = true
  user: any

  constructor(private authService: AuthServiceFake, private router: Router) {}

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => {
          this._displayLogin = !authStatus.isAuthenticated
          this.user = authStatus
        }
    )
  }

  get displayLogin() {
    return this._displayLogin
  }

  sair() {
    this.router.navigate([''])
  }
}
