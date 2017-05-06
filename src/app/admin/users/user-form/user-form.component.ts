import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../shared/models/user';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { AdminService } from '../../../shared/services/admin.service';
import { Group } from '../../../shared/models/group';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input() user: User = new User;
  @Output() submitUser = new EventEmitter();
  groups: Array<Group> = [];
  form: FormGroup;
  selectedRole = null;
  constructor(
    private adminService: AdminService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      first_name: [],
      last_name: [],
      email: [],
      username: [],
      password: [],
      role: [],
      group: []
    });
  }

  ngOnInit() {

    this.adminService.getGroups().subscribe((groups) => {
      console.log(groups);

      this.groups = groups;
    });
  }

  onSubmitForm() {
    console.log(this.form.value);

    this.submitUser.emit(
      this.form.value
    );
  }
}
