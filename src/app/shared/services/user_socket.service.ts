import {Injectable} from "@angular/core";
import {server} from "../../../config/server";
import {SocketService} from "./socket.service";
import {Observable} from "rxjs";

import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class UserSocketService {
  private socket: SocketService;

  constructor(private cookieService: CookieService) {
    this.socket = new SocketService(
      server.protocol,
      server.hostname,
      server.port,
      server.namespaces.auth,
      this.cookieService.get('token')
    );

    this.socket.connect();
  }

  login(attributes: Object) {
    let socket = this.socket;
    let self = this;
    let observable = new Observable(observer => {
      socket.emit("login", attributes);

      socket.on('login_failed', (attributes) => observer.error(attributes));
      socket.on('login_success', (attributes) => {
        this.cookieService.put('token', attributes['token'], {
          'path': '*'
        });

        observer.next(attributes);
      });
    });

    return observable;
  }

  registration(attributes: Object) {
    let socket = this.socket;

    let observable = new Observable(observer => {
      socket.emit("registration", attributes);

      socket.on('registration_failed', (attributes) => observer.error(attributes));
      socket.on('registration_success', (attributes) => observer.next(attributes));
    });

    return observable;
  }

  getCurrentUser() {
    let socket = this.socket;

    let observable = new Observable(observer => {
      socket.emit("current_user");

      socket.on('failed', (attributes) => observer.error(attributes));
      socket.on('success', (attributes) => observer.next(attributes));
    });

    return observable;
  }
}
