import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../user.model';

@Component({
    selector: 'app-user-add',
    templateUrl: './user-add.component.html',
    styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    userFormGroup: FormGroup;
    user: User;

    constructor(
        private formBuilder: RxFormBuilder
    ) { }

    ngOnInit() {
        this.user = new User();
        this.userFormGroup = this.formBuilder.formGroup(this.user);
    }
}
