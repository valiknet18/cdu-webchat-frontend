import {Injectable} from "@angular/core";
import {SocketService, SocketListeners} from "./socket.service";
import {RoomService} from "./room.service";
import {Room} from "../models/room";

@Injectable()
export class RoomSocketService implements SocketListeners {
  constructor(private socketService: SocketService, private roomService: RoomService) {
    this.registerListeners();
  }

  registerListeners() {
    let self = this;

    this.socketService.on('successful_selected_room', function (attributes) {
      let room = Object.assign(new Room(), attributes['room']);

      console.log(attributes);

      self.roomService.getRoom().next(room);
    });

    this.socketService.on('receive_messages', function (attributes) {
      let room = Object.assign(new Room(), attributes['room']);

      let last_room = self.roomService.getCurrentRoom().getValue();

      if (room.id == last_room) {
        self.roomService.getRoom().next(room);
      }
    })
  }

  selectRoom(room_id: number) {
    this.socketService.emit('select_room', {
      id: room_id
    });
  }

  sendMessage(message: Object) {
    this.socketService.emit('send_message_to_room', message);
  }
}
