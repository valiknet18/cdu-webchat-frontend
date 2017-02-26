import { Injectable } from "@angular/core";
import { SocketService, SocketListeners } from "./socket.service";

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UserService } from "./user.service";
import { User } from "../models/user";
import { Subject } from "rxjs";

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
        'error': 'Registration failed'
      });

      console.log(attributes['error']);
    });
    this.socketService.on('registration_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.authStatusSubject.next({
        'success': 'User successful registered'
      });
    });

    this.socketService.on('login_failed', (attributes) => {
      self.authStatusSubject.next(attributes);
    });
    this.socketService.on('login_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.authStatusSubject.next({
        'success': 'User successful authorized'
      });
    });

    this.socketService.on('failed', (attributes) => {
      self.userService.getUser().next(null);
    });
    this.socketService.on('success', (attributes) => {
      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user)
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
    this.socketService.emit("current_user");

    return this.userService.getUser();
  }
}
