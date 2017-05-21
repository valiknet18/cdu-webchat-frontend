import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { EventSocketService } from '../../shared/services/event_socket.service';
import { Event } from '../../shared/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../shared/services/event.service';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit, OnDestroy {
  private sub: any;
  private event: Event = new Event();

  editEventActions = new EventEmitter<MaterializeAction|string>();

  constructor(
    private eventSocketService: EventSocketService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.eventSocketService.getEvent(+params['id']);
    });

    this.eventService.getEvent().subscribe((event) => {
      if (!event) {
        return false;
      }

      this.event = event;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEditEvent(event) {
    let groupIds = [];

    for (let group of event['groups']) {
      groupIds.push(group['id']);
    }

    event['id'] = this.event.id;
    event['groups'] = groupIds;

    this.eventSocketService.editEvent(event);
    this.editEventActions.emit('toast');
    this.router.navigate(['/events']);
  }
}
