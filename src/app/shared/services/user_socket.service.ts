import { Injectable } from "@angular/core";
import { SocketService, SocketListeners } from "./socket.service";

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UserService } from "./user.service";
import { User } from "../models/user";
import { Subject } from "rxjs";
import { Group } from '../models/group';

@Injectable()
export class UserSocketService implements SocketListeners {
  private authStatusSubject = new Subject<Object>();

  constructor(
    private cookieService: CookieService,
    private userService: UserService,
    private socketService: SocketService
  ) {
    this.registerListeners();
  }

  /**
   * Register listeners
   */
  registerListeners() {
    let self = this;

    this.socketService.on('registration_failed', (attributes) => {
      self.authStatusSubject.next({
        'error': 'Під час реєстрації сталася помилка'
      });

      console.log(attributes['error']);
    });
    this.socketService.on('registration_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.userService.isLoggedIn = true;
      self.authStatusSubject.next({
        'success': 'Користувач успішно зареєстрований'
      });
    });

    this.socketService.on('login_failed', (attributes) => {
      self.authStatusSubject.next(attributes);
    });
    this.socketService.on('login_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.userService.isLoggedIn = true;
      self.authStatusSubject.next({
        'success': 'Користувач успішно авторизований'
      });
    });

    this.socketService.on('failed', (attributes) => {
      self.userService.getUser().next(null);
    });
    this.socketService.on('success', (attributes) => {
      console.log(attributes['user']);

      let user = Object.assign(new User(), attributes['user']);
      self.userService.isLoggedIn = true;
      self.userService.getUser().next(user);
    });

    this.socketService.on('receive_users', (attributes) => {
      let users = [];

      for (let user of attributes['users']) {
        users.push(Object.assign(new User(), user));
      }

      console.log(users);

      self.userService.getUsers().next(users);
    });

    this.socketService.on('receive_groups', (attributes) => {
      let groups = [];

      for (let group of attributes['groups']) {
        groups.push(Object.assign(new Group(), group));
      }

      console.log(groups);

      self.userService.getGroups().next(groups);
    });
  }

  /**
   * Login user
   * @param attributes
   * @returns {Subject<Object>}
   */
  login(attributes: Object) {
    this.socketService.emit("login", attributes);

    return this.authStatusSubject;
  }

  /**
   * Register new user
   * @param attributes
   * @returns {Subject<Object>}
   */
  registration(attributes: Object) {
    this.socketService.emit("registration", attributes);

    return this.authStatusSubject;
  }

  /**
   * Get current user
   * @returns {BehaviorSubject<User>}
   */
  getCurrentUser() {
    this.socketService.emit('current_user');

    return this.userService.getUser();
  }

  getUsers() {
    this.socketService.emit('get_users');
  }

  getGroups() {
    this.socketService.emit('get_groups');
  }

  updateUserProfile(user: User) {
    this.socketService.emit('update_profile', {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}
