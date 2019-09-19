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

    constructor() { }

    addUser() {}

    getUser() {}

    getUsers() {}

    removeUser() {}

}
