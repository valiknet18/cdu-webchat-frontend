import * as io from "socket.io-client";

export class SocketService {
  private socket: any;

  constructor(private protocol: string,
              private hostname: string,
              private port: string,
              private namespace: string = '',
              private token: string = ''
  ) {}

  connect() {
    let host = this.protocol + '//' + this.hostname + ':' + this.port;

    // if (this.namespace) {
    //   host += this.namespace;
    // }

    this.socket = io.connect(host, {
      query: {
        token: this.token
      }
    });
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
