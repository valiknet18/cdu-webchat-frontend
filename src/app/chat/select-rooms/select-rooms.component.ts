import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/models/user";
import { Router } from "@angular/router";
import { UserService } from "../../shared/services/user.service";
import { Room } from "../../shared/models/room";
import { UserSocketService } from '../../shared/services/user_socket.service';

@Component({
  selector: 'app-select-rooms',
  templateUrl: './select-rooms.component.html',
  styleUrls: ['./select-rooms.component.scss']
})
export class SelectRoomsComponent implements OnInit {
  rooms: Room[];

  constructor(
    private userService: UserService,
    private userSocketService: UserSocketService,
    private router: Router
  ) {
    this.userSocketService.getCurrentUser();
  }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.userService.getUser().subscribe(
      (user?: User) => {
        if (!user) {
          return false;
        }

        this.rooms = user.group.rooms;

        if (!user.last_selected_room) {
          return false;
        }

        this.onSelectRoom(user.last_selected_room);
      }
    );
  }

  onSelectRoom(room_id: number) {
    this.router.navigate(['/chat', room_id]);
  }
}
