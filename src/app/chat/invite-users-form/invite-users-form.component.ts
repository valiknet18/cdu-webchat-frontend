import {
  AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { User } from "../../shared/models/user";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-invite-users-form',
  templateUrl: './invite-users-form.component.html',
  styleUrls: ['./invite-users-form.component.scss']
})
export class InviteUsersFormComponent implements OnInit, OnChanges {
  @Output() closeInviteUsers = new EventEmitter();
  @Output() selectUsers = new EventEmitter();
  @Input() users: Array<User>;
  @Input() members: Array<User>;

  selectedUsers = [];
  inviteUsersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inviteUsersForm = this.formBuilder.group({
      users: []
    });

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    if (
      ('members' in changes && !changes['members'].previousValue) ||
      ('users' in changes && !changes['users'].previousValue)
    ) {
      this.getSelectedUsers();
    }
  }

  private getSelectedUsers() {
    if (!this.users) {
      return false;
    }

    for (let user of this.users) {
      console.log(user);
      for (let member of this.members) {
        console.log(member);

        if (member.email === user.email) {
          this.selectedUsers.push(user);
        }
      }
    }

    console.log(this.selectedUsers);
  }

  onSubmitForm() {
    this.selectUsers.emit(this.inviteUsersForm.value.users);
  }

  onClosePopup() {
    this.closeInviteUsers.emit();
  }
}
