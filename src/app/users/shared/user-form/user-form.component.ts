import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User, UserService } from '../user.service';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

    @Input() user: User;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private userService: UserService,
    ) { }

    // get errorMessage(): string { }

    ngOnInit() {
        console.log('ngOnInit', this.user);

        this.form = this.createForm();

        if (!!this.user) {
            this.form.patchValue(this.user, {emitEvent: false});
        }
    }

    onSubmit(form: FormGroup) {
        console.log('submit', form);
    }

    private createForm(): FormGroup {
        const size = this.userService.getUsers.length;

        return this.formBuilder.group({
            id: () => size + 1,
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            company: '',
            email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            phone: [''],
        });
    }

}
