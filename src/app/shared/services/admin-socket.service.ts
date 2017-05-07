import { Injectable } from '@angular/core';
import { SocketListeners, SocketService } from './socket.service';
import { AdminService } from './admin.service';
import { User } from '../models/user';
import { Event } from '../models/event';
import { Group } from '../models/group';

@Injectable()
export class AdminSocketService implements SocketListeners{

  constructor(
    private socketService: SocketService,
    private adminService: AdminService
  ) {
    this.registerListeners();
  }

  registerListeners() {
    this.socketService.on('admin_receive_users', (attributes) => {
      if (!attributes['users']) {
        return false;
      }

      let users = [];

      for (let user of attributes['users']) {
        users.push(
          Object.assign({}, user, new User())
        );
      }

      this.adminService.getUsers().next(users);
    });

    this.socketService.on('admin_receive_groups', (attributes) => {
      if (!attributes['groups']) {
        return false;
      }

      console.log(attributes['groups']);

      let groups = [];

      for (let group of attributes['groups']) {
        groups.push(
          Object.assign({}, group, new Group())
        );
      }

      console.log(groups);

      this.adminService.getGroups().next(groups);
    });

    this.socketService.on('admin_receive_user', (attributes) => {
      if (!attributes['user']) {
        return false;
      }

      let user = Object.assign({}, attributes['user'], new User());

      this.adminService.getUser().next(user);
    });

    this.socketService.on('admin_receive_group', (attributes) => {
      if (!attributes['group']) {
        return false;
      }

      const group = Object.assign({}, attributes['group'], new Group());

      this.adminService.getGroup().next(group);
    });

    this.socketService.on('admin_receive_events', (attributes) => {
      console.log(attributes['events']);

      if (!attributes['events']) {
        return false;
      }

      let events = [];

      for (let event of attributes['events']) {
        events.push(
          Object.assign({}, event, new Event())
        );
      }

      this.adminService.getEvents().next(events);
    });
  }

  getUsers() {
    this.socketService.emit('admin_get_users');
  }

  createUser(user: User) {
    this.socketService.emit('admin_create_user', {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      group: (user.group) ? user.group.id : null
    });
  }

  editUser(user: User) {
    this.socketService.emit('admin_edit_user', {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
      group: (user.group) ? user.group.id : null
    });
  }

  getUser(id: number) {
    this.socketService.emit('admin_get_user', {
      id: id
    });
  }

  deleteUser(id: number) {
    this.socketService.emit('admin_delete_user', {
      id: id
    });
  }

  getGroups() {
    this.socketService.emit('admin_get_groups');
  }

  createGroup(group: Group) {
    this.socketService.emit('admin_create_group', {
      name: group.name
    });
  }

  editGroup(group: Group) {
    this.socketService.emit('admin_edit_group', {
      id: group.id,
      name: group.name
    });
  }

  getGroup(id: number) {
    this.socketService.emit('admin_get_group', {
      id: id
    });
  }

  deleteGroup(group: Group) {
    this.socketService.emit('admin_delete_group', {
      id: group.id
    });
  }

  getEvents() {
    this.socketService.emit('admin_get_events');
  }
}
