import { Injectable } from '@angular/core';

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

    constructor() {
        this.users = [
            ...USERS,
        ].reverse();
    }

    addUser(user: User) {
        // this.users.unshift(user);
    }

    getUser(userId: number): User {
        return this.users.find(user => user.id === userId);
    }

    getUsers(): User[] {
        return this.users;
    }

    removeUser() {}

}
