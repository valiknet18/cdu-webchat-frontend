import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { UserSocketService } from './services/user_socket.service';
import { SocketService } from './services/socket.service';
import { RoomService } from './services/room.service';
import {RoomSocketService } from './services/room_socket.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    UserService,
    UserSocketService,
    SocketService,
    RoomService,
    RoomSocketService
  ]
})
export class SharedModule {}
