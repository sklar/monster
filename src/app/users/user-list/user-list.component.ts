import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatSortable, MatTableDataSource  } from '@angular/material';

import { User, UserService } from '../shared/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator, {static: true})
        paginator: MatPaginator;
    @ViewChild(MatSort, {static: true})
        sort: MatSort;

    dataSource: MatTableDataSource<User>;
    displayedColumns = [
        // 'id',
        'lastName',
        'firstName',
        'company',
        'contact',
        'action',
    ];

    constructor(
        private userService: UserService,
    ) {
        this.dataSource = new MatTableDataSource<User>([]);
        this.update();
    }

    applyFilter(filterValue: string ) {
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    ngOnInit() {
        this.sort.sort(({ id: 'id', start: 'desc'}) as MatSortable);
        this.dataSource.sort = this.sort;
    }

    onRemove(user: User) {
        this.userService.removeUser(user);
        this.update();
    }

    trackByUserId(user: User, index: number) {
        return user.id;
    }

    update() {
        this.dataSource.data = this.userService.getUsers();
    }

}
