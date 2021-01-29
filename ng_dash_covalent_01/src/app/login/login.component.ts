import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//import { TdLoadingService } from '@covalent/core';
//import { AlertService } from '../../services/alert.service';
//import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'ab-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  username: ' ';
  password: ' ';

  loading = false;
  returnUrl: string;
    
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService,
    //private alertService: AlertService,

    //private _loadingService: TdLoadingService
  ) { }

  ngOnInit() {
    // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
/*     this.loading = true;
    this.authenticationService.login(this.username, this.password)
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }); */
  }

}