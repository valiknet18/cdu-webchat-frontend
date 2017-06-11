import { Component, OnInit, OnDestroy, EventEmitter, group } from '@angular/core';
import { Room } from '../shared/models/room';
import { Message } from '../shared/models/message';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { RoomSocketService } from '../shared/services/room_socket.service';
import { RoomService } from '../shared/services/room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MaterializeAction } from 'angular2-materialize';
import { UserSocketService } from '../shared/services/user_socket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Group } from '../shared/models/group';

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
  groups: Group[];
  allGroups: Group[];
  roomsModal = new EventEmitter<string | MaterializeAction>();
  createRoomModal = new EventEmitter<string | MaterializeAction>();
  inviteUsersModal = new EventEmitter<string | MaterializeAction>();
  isJoinedToRoom: Boolean = false;
  allUsers: User[];
  toastMessage: string;
  user: User;

  selectRoomAction = new EventEmitter<string | MaterializeAction>();
  createRoomAction = new EventEmitter<string | MaterializeAction>();
  inviteUsersAction = new EventEmitter<string | MaterializeAction>();

  private sub: any;

  constructor(private userSocketService: UserSocketService,
              private userService: UserService,
              private roomSocketService: RoomSocketService,
              private roomService: RoomService,
              private route: ActivatedRoute,
              private router: Router) {
    this.userSocketService.getCurrentUser();
    this.userSocketService.getGroups();
    this.userSocketService.getUserRooms();
  }

  ngOnInit() {
    this.getCurrentRoom();
    this.getRooms();
    this.getMessages();

    this.userService.getUser().subscribe(
      (user?: User) => {
        if (!user) {
          return false;
        }

        this.user = user;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getMessages() {
    this.roomService.getRoom().subscribe(
      (room?: Room) => {
        if (!room) {
          return false;
        }

        this.userService.joinToRoom(room);

        let members = [];

        console.log(room);

        for (let group of room.groups) {
          members.push(...group.students);
        }

        members.push(room.teacher);

        this.room = room;
        this.members = members;
        this.groups = room.groups;
        this.messages = room.messages;
      }
    );
  }

  getRooms() {
    let self = this;

    this.userService.getUserRooms().subscribe(
      (rooms?: Array<Room>) => {
        if (!rooms) {
          return false;
        }

        console.log(rooms);

        self.rooms = rooms;
      }
    );

    this.userService.isJoinedToRoom().subscribe(
      (isJoined) => {
        console.log('Is joined: ', isJoined);

        self.isJoinedToRoom = isJoined;
      }
    );

    this.userService.getGroups().subscribe((groups?: Group[]) => {
      if (!groups) {
        return false;
      }

      console.log('get groups');
      console.log(groups);

      this.allGroups = groups;
    });
  }

  getCurrentRoom() {
    let self = this;

    this.sub = this.route.params.subscribe(params => {
      let currentRoomId = +params['id'];


      self.roomSocketService.selectRoom(currentRoomId);
      self.roomService.getCurrentRoom().next(currentRoomId);
    });

    this.userSocketService.getUsers();
    this.userService.getUsers().subscribe((users) => {
      if (!users) {
        return false;
      }

      this.allUsers = users;

      console.log(this.allUsers);
    });
  }

  onSelectRoom(room_id: number) {
    this.roomsModal.emit({action: 'modal', params: ['close']});
    this.selectRoomAction.emit('toast');
    this.router.navigate(['/chat', room_id]);
    this.roomSocketService.selectRoom(room_id);
  }

  onSendMessage(messageForm: Object) {
    messageForm['id'] = this.room.id;

    this.roomSocketService.sendMessage(messageForm);
  }

  /**
   * @deprecated
   */
  onJoinToRoom() {
    this.roomSocketService.joinToRoom(this.room.id);
    this.userService.isJoinedToRoom().next(true);
  }

  openRoomsModal() {
    this.roomsModal.emit({action: 'modal', params: ['open']});
  }

  openCreateRoomModal() {
    this.createRoomModal.emit({action: 'modal', params: ['open']});
  }

  openInviteUsersModal() {
    this.inviteUsersModal.emit({action: 'modal', params: ['open']});
  }

  onCreateRoom(room) {
    this.roomSocketService.createRoom(room.name);
    this.createRoomModal.emit({action: 'modal', params: ['close']});
    this.createRoomAction.emit('toast');
  }

  onCloseRoomForm() {
    this.createRoomModal.emit({action: 'modal', params: ['close']});
  }

  onCloseInviteUsersPopup() {
    this.inviteUsersModal.emit({action: 'modal', params: ['close']});
  }

  onSelectUsersForInvite(groups) {
    let groupIds = [];

    for (let group of groups) {
      groupIds.push(group.id);
    }

    this.roomSocketService.inviteGroups(this.room.id, groupIds);
    this.inviteUsersModal.emit({action: 'modal', params: ['close']});
    this.inviteUsersAction.emit('toast');
  }

  onCloseSelectRooms() {
    this.roomsModal.emit({action: 'modal', params: ['close']});
  }
}
