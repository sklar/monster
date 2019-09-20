import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
} from '@angular/material';

import { UserRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './shared/user-form/user-form.component';

@NgModule({
    declarations: [
        AddUserComponent,
        EditUserComponent,
        UserListComponent,
        UserFormComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        ReactiveFormsModule,
        UserRoutingModule,
    ]
})
export class UsersModule { }
