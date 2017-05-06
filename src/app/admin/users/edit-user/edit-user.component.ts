import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { AdminService } from '../../../shared/services/admin.service';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit, OnDestroy {
  private sub: any;
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private adminSocketService: AdminSocketService,
    private adminService: AdminService
  ) {
    this.adminSocketService.getGroups();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.adminSocketService.getUser(+params['id']);
    });

    this.adminService.getUser().subscribe((user?) => {
      if (!user) {
        return false;
      }

      this.user = user;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmitUser(user) {

    user['id'] = this.user.id;
    user = Object.assign({}, user, new User());

    console.log(user);

    try {
      this
        .adminSocketService
        .editUser(user);
    } catch (e) {
      console.log(e);
    }
  }
}
