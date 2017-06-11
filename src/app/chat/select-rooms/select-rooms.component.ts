import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from "../../shared/models/user";
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { Room } from "../../shared/models/room";
import { UserSocketService } from '../../shared/services/user_socket.service';
import { MaterializeAction } from 'angular2-materialize';
import { RoomSocketService } from '../../shared/services/room_socket.service';

@Component({
  selector: 'app-select-rooms',
  templateUrl: './select-rooms.component.html',
  styleUrls: ['./select-rooms.component.scss']
})
export class SelectRoomsComponent implements OnInit {
  rooms: Room[] = [];
  user: User;
  createRoomModal = new EventEmitter<MaterializeAction|string>();
  createRoomAction = new EventEmitter<MaterializeAction|string>();

  constructor(
    private userService: UserService,
    private userSocketService: UserSocketService,
    private router: Router,
    private roomSocketService: RoomSocketService
  ) {
    this.userSocketService.getCurrentUser();
    this.userSocketService.getUserRooms();
  }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.userService.getUserRooms().subscribe(
      (rooms?: Room[]) => {
        if (!rooms) {
          return false;
        }

        console.log(rooms);

        this.rooms = rooms;
      }
    );

    this.userService.getUser().subscribe((user?: User) => {
      if (!user) {
        return false;
      }

      this.user = user;
    });
  }

  onSelectRoom(room_id: number) {
    this.router.navigate(['/chat', room_id]);
  }

  onOpenCreateRoomForm() {
    this.createRoomModal.emit({action: 'modal', params: ['open']});
  }

  onCreateRoom(room) {
    this.roomSocketService.createRoom(room.name);
    this.createRoomModal.emit({action: 'modal', params: ['close']});
    this.createRoomAction.emit('toast');
  }

  onCloseRoomForm() {
    this.createRoomModal.emit({action: 'modal', params: ['close']});
  }
}
