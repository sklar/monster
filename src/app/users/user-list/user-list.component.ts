import {
    AfterViewInit,
    Component,
    OnInit,
    ViewChild,
} from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { User, UserService } from '../shared/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator, {static: true})
        paginator: MatPaginator;

    dataSource: MatTableDataSource<User>;
    displayedColumns = [
        'lastName',
        'firstName',
        'company',
        'contact',
        'cta',
    ];

    constructor(
        private userService: UserService,
    ) {
        this.dataSource = new MatTableDataSource<User>([]);
        this.dataSource.data = userService.getUsers();
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit() { }

}
