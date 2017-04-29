import {Injectable} from "@angular/core";
import {SocketService, SocketListeners} from "./socket.service";
import {RoomService} from "./room.service";
import {Room} from "../models/room";
import { User } from "../models/user";

@Injectable()
export class RoomSocketService implements SocketListeners {
  constructor(private socketService: SocketService, private roomService: RoomService) {
    this.registerListeners();
  }

  registerListeners() {
    let self = this;

    this.socketService.on('successful_selected_room', function (socket) {
      let room = Object.assign(new Room(), socket['room']);

      console.log(socket);

      self.roomService.getRoom().next(room);
    });

    this.socketService.on('receive_messages', function (attributes) {
      let room = Object.assign(new Room(), attributes['room']);

      console.log(room);

      let last_room = self.roomService.getCurrentRoom().getValue();

      if (room.id == last_room) {
        self.roomService.getRoom().next(room);
      }
    });

    this.socketService.on('receive_rooms', function (attributes) {
      let rooms = [];

      for (let room of attributes['rooms']) {
        rooms.push(Object.assign(new Room(), room));
      }

      self.roomService.getRooms().next(rooms);
    });
  }

  selectRoom(room_id: number) {
    this.socketService.emit('select_room', {
      id: room_id
    });
  }

  sendMessage(message: Object) {
    this.socketService.emit('send_message_to_room', message);
  }

  getRooms() {
    this.socketService.emit('get_rooms');
  }

  joinToRoom(room_id: number) {
    this.socketService.emit('join_to_room', {
      id: room_id
    });
  }

  createRoom(name: String) {
    this.socketService.emit('create_room', {
      room: {
        name: name
      }
    });
  }

  inviteUsers(room_id: number, users: Array<User>) {
    this.socketService.emit('invite_users', {
      room: room_id,
      users: users
    });
  }
}
