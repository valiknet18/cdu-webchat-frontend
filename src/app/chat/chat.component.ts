import {Component, OnInit} from "@angular/core";
import {Room} from "../shared/models/room";
import {Message} from "../shared/models/message";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user";
import {RoomSocketService} from "../shared/services/room_socket.service";
import {RoomService} from "../shared/services/room.service";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
  rooms: Room[];
  messages: Message[];

  constructor(
    private userService: UserService,
    private roomSocketService: RoomSocketService,
    private roomService: RoomService
  ) {

  }

  ngOnInit() {
    this.getRooms();
    this.getMessages();
  }

  getMessages() {
    let self = this;

    this.roomService.getRoom().subscribe(
      (room?: Room) => {
        if (!room) {
          return false;
        }

        self.messages = room.messages;
      }
    );
  }

  getRooms() {
    let self = this;

    this.userService.getUser().subscribe(
      (user?: User) => {
        if (!user) {
          return false;
        }

        self.rooms = user.rooms;

        console.log(self.rooms);

        if (!user.last_selected_room) {
          return false;
        }

        self.onSelectRoom(user.last_selected_room);
      }
    );
  }

  onSelectRoom(room_id: number) {
    this.roomSocketService.selectRoom(room_id);
  }
}
