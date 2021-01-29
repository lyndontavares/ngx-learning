import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from './user.model';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core/loading';
 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userFormGroup: FormGroup;
    user: User;

    constructor(
        private formBuilder: RxFormBuilder,
        private _router: Router,
        private _loadingService: TdLoadingService
    ) { }

    ngOnInit() {
        this.user = new User();
        this.userFormGroup = this.formBuilder.formGroup(this.user);
    }

    login(): void {
        this._loadingService.register();
        alert('Mock log in as ' + this.user.userName);
        setTimeout(() => {
          this._router.navigate(['/dash']);
          this._loadingService.resolve();
        }, 2000);
      }
}
