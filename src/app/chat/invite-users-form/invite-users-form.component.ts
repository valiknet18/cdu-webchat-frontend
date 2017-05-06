import {
  AfterContentInit, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import { User } from '../../shared/models/user';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../shared/models/group';
import { UserSocketService } from '../../shared/services/user_socket.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-invite-users-form',
  templateUrl: './invite-users-form.component.html',
  styleUrls: ['./invite-users-form.component.scss']
})
export class InviteUsersFormComponent implements OnInit, OnChanges {
  @Output() closeInviteUsers = new EventEmitter();
  @Output() selectUsers = new EventEmitter();
  @Input() channelGroups: Array<Group>;
  @Input() allGroups: Array<Group>;

  selectedGroups = [];
  inviteUsersForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.inviteUsersForm = this.formBuilder.group({
      groups: []
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);

    if (
      ('channelGroups' in changes && !changes['channelGroups'].previousValue) ||
      ('allGroups' in changes && !changes['allGroups'].previousValue)
    ) {
      this.getSelectedGroups();
    }
  }

  private getSelectedGroups() {
    if (!this.allGroups || !this.channelGroups) {
      return false;
    }

    for (let group of this.allGroups) {
      for (let channelGroup of this.channelGroups) {
        if (group.id === channelGroup.id) {
          this.selectedGroups.push(group);
        }
      }
    }

    console.log(this.selectedGroups);
  }

  onSubmitForm() {
    this.selectUsers.emit(this.inviteUsersForm.value.groups);
  }

  onClosePopup() {
    this.closeInviteUsers.emit();
  }
}
