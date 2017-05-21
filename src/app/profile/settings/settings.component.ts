import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { UserSocketService } from '../../shared/services/user_socket.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  form: FormGroup;
  user: User = new User();
  profileActions = new EventEmitter<string|MaterializeAction>();

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userSocketService: UserSocketService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      first_name: [],
      last_name: [],
      email: [],
      username: [],
      password: []
    });

    this.userService.getUser().subscribe((user) => {
      if (!user) {
        return false;
      }

      this.user = user;
    });
  }

  updateUserData() {
    const user = Object.assign(new User(), this.form.value);

    this.userSocketService.updateUserProfile(user);
    this.profileActions.emit('toast');
  }
}
