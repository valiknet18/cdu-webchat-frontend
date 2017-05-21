import { Injectable } from '@angular/core';
import { SocketService, SocketListeners } from './socket.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { EventService } from './event.service';
import { Event } from '../models/event';

@Injectable()
export class EventSocketService implements SocketListeners {
  constructor(
    private eventService: EventService,
    private socketService: SocketService
  ) {
    this.registerListeners();
  }

  /**
   * Register listeners
   */
  registerListeners() {
    this.socketService.on('receive_events', (attributes) => {
      if (!attributes['events']) {
        return false;
      }

      let events = [];

      for (event of attributes['events']) {
        events.push(Object.assign(new Event(), event));
      }

      this.eventService.getEvents().next(events);
    });

    this.socketService.on('receive_event', (attributes) => {
      console.log(attributes);

      if (!attributes['event']) {
        return false;
      }

      const event = Object.assign(new Event(), attributes['event']);

      this.eventService.getEvent().next(event);
    });
  }

  getEvents() {
    this.socketService.emit('get_events');
  }

  getEvent(id) {
    this.socketService.emit('get_event', {
      id: id
    });
  }

  createEvent(event) {
    this.socketService.emit('create_event', {
      name: event['name'],
      start_at: event['start_at'],
      groups: event['groups']
    });
  }

  editEvent(event) {
    this.socketService.emit('edit_event', {
      id: event['id'],
      name: event['name'],
      start_at: event['start_at'],
      groups: event['groups']
    });
  }
}
