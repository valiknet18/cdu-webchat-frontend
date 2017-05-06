import { Component, OnInit } from '@angular/core';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  constructor(
    private adminSocketService: AdminSocketService,
    private router: Router
  ) {
    this.adminSocketService.getGroups();
  }

  ngOnInit() {
  }

  onSubmitUser(user) {
    this
      .adminSocketService
      .createUser(user);

    this.router.navigate(['/admin/users']);
  }
}
