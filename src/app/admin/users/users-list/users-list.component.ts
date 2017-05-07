import { Component, OnInit } from '@angular/core';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { AdminService } from '../../../shared/services/admin.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Array<User>;
  filteredUsers: Array<User> = [];
  filteredValue = '';
  constructor(
    private adminSocketService: AdminSocketService,
    private adminService: AdminService
  ) {
    this.adminSocketService.getUsers();
  }

  ngOnInit() {
    this.adminService.getUsers().subscribe((users?) => {
      if (!users) {
        return false;
      }

      this.filteredUsers = users;
      this.users = users;
    });
  }

  onFilterUsers(value) {
    const self = this;

    this.filteredUsers = this.users.filter(user => {
      return user['first_name'].indexOf(value) !== -1 || user['last_name'].indexOf(value) !== -1;
    });
  }

  onDelete(user: User) {
    this.adminSocketService.deleteUser(user.id);
  }
}
