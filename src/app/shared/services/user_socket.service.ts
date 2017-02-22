import { Injectable } from "@angular/core";
import { server } from "../../../config/server";
import { SocketService, SocketListeners } from "./socket.service";

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { UserService } from "./user.service";
import { User } from "../models/user";
import { Subject } from "rxjs";

@Injectable()
export class UserSocketService implements SocketListeners {
  private socket: SocketService;
  private authStatusSubject = new Subject<Object>();

  constructor(private cookieService: CookieService, private userService: UserService) {
    this.socket = new SocketService(
      server.protocol,
      server.hostname,
      server.port,
      server.namespaces.auth,
      this.cookieService.get('token')
    );

    this.socket.connect();
    this.registerListeners();
  }

  /**
   * Register listeners
   */
  registerListeners() {
    let self = this;

    this.socket.on('registration_failed', (attributes) => {
      self.authStatusSubject.next({
        'error': 'Registration failed'
      });

      console.log(attributes['error']);
    });
    this.socket.on('registration_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.authStatusSubject.next({
        'success': 'User successful registered'
      });
    });

    this.socket.on('login_failed', (attributes) => {
      self.authStatusSubject.next(attributes);
    });
    this.socket.on('login_success', (attributes) => {
      self.cookieService.put('token', attributes['token']);

      let user = Object.assign(new User(), attributes['user']);

      self.userService.getUser().next(user);
      self.authStatusSubject.next({
        'success': 'User successful authorized'
      });
    });

    this.socket.on('failed', (attributes) => self.userService.getUser().next(null));
    this.socket.on('success', (attributes) => {
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
    this.socket.emit("login", attributes);

    return this.authStatusSubject;
  }

  /**
   * Register new user
   * @param attributes
   * @returns {Subject<Object>}
   */
  registration(attributes: Object) {
    this.socket.emit("registration", attributes);

    return this.authStatusSubject;
  }

  /**
   * Get current user
   * @returns {BehaviorSubject<User>}
   */
  getCurrentUser() {
    this.socket.emit("current_user");

    return this.userService.getUser();
  }
}
