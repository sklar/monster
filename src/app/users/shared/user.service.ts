import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import data from './data.json';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
}

export const USERS: User[] = data;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private users: User[];

    constructor(
        private snackbar: MatSnackBar,
    ) {
        this.users = [
            ...USERS,
        ];
    }

    addUser(user: User): void {
        this.users = [
            ...this.users,
            user,
        ];
        this.snackbar.open(`User ${user.firstName} ${user.lastName} created ✌`);
    }

    getUser(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    getUsers(): User[] {
        return this.users;
    }

    removeUser(user: User): void {
        const userIndex = this.getUserIndex(user);

        this.users = [
            ...this.users.slice(0, userIndex),
            ...this.users.slice(userIndex + 1),
        ];
        this.snackbar.open(`User ${user.firstName} ${user.lastName} removed ☝`);
    }

    updateUser(user: User): void {
        const userIndex = this.getUserIndex(user);

        this.users = [
            ...this.users.slice(0, userIndex),
            user,
            ...this.users.slice(userIndex + 1),
        ];
        this.snackbar.open(`User ${user.firstName} ${user.lastName} updated ✌`);
    }

    private getUserIndex(user: User): number {
        return this.users.findIndex(usr => usr.id === user.id);
    }

}
