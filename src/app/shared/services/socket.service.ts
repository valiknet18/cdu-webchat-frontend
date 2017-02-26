import * as io from "socket.io-client";
import { server } from "../../../config/server";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {Injectable} from "@angular/core";

@Injectable()
export class SocketService {
  private socket: any;
  private protocol: string;
  private hostname: string;
  private port: string;
  private namespace: string = '';
  private token: string = '';

  constructor(private cookieService: CookieService) {
    this.protocol = server.protocol;
    this.hostname = server.hostname;
    this.port = server.port;

    if (cookieService.get('token')) {
      this.token = cookieService.get('token');
    }

    this.connect();
  }

  connect() {
    let host = this.protocol + '//' + this.hostname + ':' + this.port;

    // if (this.namespace) {
    //   host += this.namespace;
    // }

    let parameters = {};

    if (this.token) {
      parameters = {
        query: {
          token: this.token
        }
      };
    }

    this.socket = io.connect(host, parameters);
  }

  on(name: string, callable: Function) {
    this.socket.on(name, callable);
  }

  emit(name: string, attributes: Object = {}) {
    console.log(this.socket);

    this.socket.emit(name, attributes);
  }
}

export interface SocketListeners {
  registerListeners();
}
