import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User, UserService } from '../user.service';

type FormTypes = 'add' | 'update';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {

    @Input() type: FormTypes = 'add';
    @Input() user: User;

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    // get errorMessage(): string { }

    ngOnInit() {
        this.form = this.createForm();

        if (!!this.user) {
            this.form.patchValue(this.user, {emitEvent: false});
        }
    }

    onRemove(userId: number) {
        const user = this.userService.getUser(userId);
        this.userService.removeUser(user);

        this.router.navigate(['../list'], {relativeTo: this.route});
    }

    onSubmit(form: FormGroup) {
        if (form.status === 'VALID') {
            if (this.type === 'add') {
                this.userService.addUser(form.value);
            } else {
                this.userService.updateUser(form.value);
            }

            this.router.navigate(['../list'], {relativeTo: this.route});
        }
    }

    private createForm(): FormGroup {
        let { id: newId } = [
            ...this.userService.getUsers()
        ].pop() || { id: 1 };
        newId = newId + 1;

        return this.formBuilder.group({
            id: newId,
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(3)]],
            company: '',
            email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
            phone: [''],
        });
    }

}
