import {Component, OnInit, OnDestroy, EventEmitter} from "@angular/core";
import {Room} from "../shared/models/room";
import {Message} from "../shared/models/message";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/user";
import {RoomSocketService} from "../shared/services/room_socket.service";
import {RoomService} from "../shared/services/room.service";
import {Router, ActivatedRoute} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: [
    'chat.component.scss'
  ]
})
export class ChatComponent implements OnInit, OnDestroy {
  rooms: Room[];
  messages: Message[];
  members: User[];
  room: Room;
  roomsModal = new EventEmitter<string|MaterializeAction>();

  private sub: any;

  constructor(
    private userService: UserService,
    private roomSocketService: RoomSocketService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getCurrentRoom();
    this.getRooms();
    this.getMessages();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getMessages() {
    let self = this;

    this.roomService.getRoom().subscribe(
      (room?: Room) => {
        if (!room) {
          return false;
        }

        self.room = room;
        self.members = room.members;
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
      }
    );
  }

  getCurrentRoom() {
    let self = this;

    this.sub = this.route.params.subscribe(params => {
      let currentRoomId = +params["id"];

      self.roomSocketService.selectRoom(currentRoomId);
      self.roomService.getCurrentRoom().next(currentRoomId);
    });
  }

  onSelectRoom(room_id: number) {
    this.router.navigate(['/chat', room_id]);
    this.roomSocketService.selectRoom(room_id);

    this.roomsModal.emit({action:"modal",params:['close']});
  }

  onSendMessage(messageForm: Object) {
    messageForm['id'] = this.room.id;

    this.roomSocketService.sendMessage(messageForm);
  }

  openRoomsModal() {
    this.roomsModal.emit({action:"modal",params:['open']});
  }
}

@Component({
  selector: 'empty-chat',
  templateUrl: './empty-chat.component.html'
})
export class EmptyChatComponent implements OnInit {
  rooms: Room[];

  constructor(
    private userService: UserService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    let self = this;

    this.userService.getUser().subscribe(
      (user?: User) => {
        if (!user) {
          return false;
        }

        self.rooms = user.rooms;

        if (!user.last_selected_room) {
          return false;
        }

        self.onSelectRoom(user.last_selected_room);
      }
    );
  }

  onSelectRoom(room_id: number) {
    this.router.navigate(['/chat', room_id]);
  }
}
