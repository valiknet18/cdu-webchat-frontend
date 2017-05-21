import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Group } from '../../shared/models/group';
import { Event } from '../../shared/models/event';
import { UserService } from '../../shared/services/user.service';
import { UserSocketService } from '../../shared/services/user_socket.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit, OnChanges {
  @Input() event: Event;
  @Output() onSubmit = new EventEmitter();
  form: FormGroup;
  allGroups: Array<Group>;
  selectedGroups: Array<Group>;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private userSocketService: UserSocketService
  ) {
    userSocketService.getGroups();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [],
      start_at: [],
      groups: []
    });

    this.userService.getGroups().subscribe((groups) => {
      if (!groups) {
        return false;
      }

      this.allGroups = groups;
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getSelectedGroups();
  }

  private getSelectedGroups() {
    if (!this.allGroups || !this.event || !this.event.room.groups) {
      return false;
    }

    this.selectedGroups = [];

    for (let group of this.allGroups) {
      for (let eventGroup of this.event.room.groups) {
        if (group.id === eventGroup.id) {
          this.selectedGroups.push(group);
        }
      }
    }
  }

  onSubmitForm() {
    this.onSubmit.emit(this.form.value);
  }
}
