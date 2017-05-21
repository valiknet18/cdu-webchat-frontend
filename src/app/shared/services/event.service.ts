import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Group } from '../models/group';
import { Event } from '../models/event';

@Injectable()
export class EventService {
  private events = new BehaviorSubject<Array<Event>>(null);
  private event = new BehaviorSubject<Event>(null);

  getEvents() {
    return this.events;
  }

  getEvent() {
    return this.event;
  }
}
