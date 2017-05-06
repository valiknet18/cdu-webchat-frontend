import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Group } from '../models/group';
import { User } from '../models/user';
import { Event } from '../models/event';

@Injectable()
export class AdminService {
  private groups = new BehaviorSubject<Array<Group>>(null);
  private users = new BehaviorSubject<Array<User>>(null);
  private events = new BehaviorSubject<Array<Event>>(null);

  private group = new BehaviorSubject<Group>(null);
  private user = new BehaviorSubject<User>(null);

  constructor() { }

  getGroup() {
    return this.group;
  }

  getGroups() {
    return this.groups;
  }

  getUser() {
    return this.user;
  }

  getUsers() {
    return this.users;
  }

  getEvents() {
    return this.events;
  }
}
