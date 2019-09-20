import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserService } from '../shared/user.service';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    user: User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
    ) { }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    ngOnInit() {
        this.subscription = this.route.params
            .pipe(map(params => params.userId))
            .subscribe((userId) => {
                this.user = this.userService.getUser(parseInt(userId, 10));
            });
    }

}
