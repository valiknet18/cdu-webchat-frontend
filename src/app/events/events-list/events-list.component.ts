import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { Event } from '../../shared/models/event';
import { EventSocketService } from '../../shared/services/event_socket.service';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  events: Array<Event>;
  filterValue: string;
  filteredEvents: Array<Event>;
  user: User;

  constructor(
    private userService: UserService,
    private eventService: EventService,
    private eventSocketService: EventSocketService
  ) {
    this.eventSocketService.getEvents();
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events) => {
      if (!events) {
        return false;
      }

      console.log(events);

      this.events = events;
      this.filteredEvents = events;
    });

    this.userService.getUser().subscribe(
      (user?: User) => {
        if (!user) {
          return false;
        }

        this.user = user;
      }
    );
  }

  onFilterConsultation(value) {
    if (!this.events) {
      return false;
    }

    this.filteredEvents = this.events.filter(consultation => {
      return consultation['name'].indexOf(value) !== -1;
    });
  }

  onDelete() {

  }
}
