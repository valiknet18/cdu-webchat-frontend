import { Component, EventEmitter, OnInit } from '@angular/core';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { Router, RouterState } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  createUserActions = new EventEmitter<MaterializeAction|string>();

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

    this.createUserActions.emit('toast');
    this.router.navigate(['/admin/users']);
  }
}
