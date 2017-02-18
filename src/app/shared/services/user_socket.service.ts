import {Injectable, OnInit} from "@angular/core";
import {server} from "../../../config/server";
import {SocketService, SocketListeners} from "./socket.service";

@Injectable()
export class UserSocketService implements SocketListeners {
  private socket: SocketService;

  constructor() {
    this.socket = new SocketService(
      server.protocol,
      server.hostname,
      server.port,
      server.namespaces.auth
    );

    this.socket.connect();
    this.registerListeners()
  }

  registerListeners() {
    this.socket.on('login_failed', (attributes) => this.login_failed(attributes));
    this.socket.on('login_success', (attributes) => this.login_success(attributes));


    this.socket.on('registration_failed', (attributes) => this.registration_failed(attributes));
    this.socket.on('registration_success', (attributes) => this.registration_success(attributes));


    this.socket.on('failed', (attributes) => this.failed(attributes));
    this.socket.on('success', (attributes) => this.success(attributes));
  }

  login(attributes: Object) {
    console.log("Login emited");

    this.socket.emit("login", attributes);
  }

  login_failed(attributes) {
    console.log(attributes);
  }

  login_success(attributes) {
    console.log(attributes);
  }

  registration(attributes: Object) {
    this.socket.emit("registration", attributes)
  }

  registration_failed(attributes) {
    console.log(attributes);
  }

  registration_success(attributes) {
    console.log(attributes);
  }

  getCurrentUser() {
    this.socket.emit("current_user")
  }

  failed(attributes) {
    console.log(attributes);
  }

  success(attributes) {
    console.log(attributes);
  }
}
