import { Component, EventEmitter, OnInit } from '@angular/core';
import { EventSocketService } from '../../shared/services/event_socket.service';
import { Event } from '../../shared/models/event';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  event: Event = new Event();

  createEventActions = new EventEmitter<MaterializeAction|string>();

  constructor(
    private eventSocketService: EventSocketService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateEvent(event) {
    let groupIds = [];

    for (let group of event['groups']) {
      groupIds.push(group['id']);
    }

    event['groups'] = groupIds;

    this.eventSocketService.createEvent(event);
    this.createEventActions.emit('toast');
    this.router.navigate(['/events']);
  }
}
