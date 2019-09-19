import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [
        AddUserComponent,
        EditUserComponent,
        UserListComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
    ]
})
export class UsersModule { }
