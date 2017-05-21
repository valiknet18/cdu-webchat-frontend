import { NgModule } from '@angular/core';
import { UserService } from './services/user.service';
import { UserSocketService } from './services/user_socket.service';
import { SocketService } from './services/socket.service';
import { RoomService } from './services/room.service';
import {RoomSocketService } from './services/room_socket.service';
import { AdminService } from './services/admin.service';
import { AdminSocketService } from './services/admin-socket.service';
import { EventSocketService } from './services/event_socket.service';
import { EventService } from './services/event.service';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    UserService,
    UserSocketService,
    SocketService,
    RoomService,
    RoomSocketService,
    AdminService,
    AdminSocketService,
    EventService,
    EventSocketService,
    AuthGuardService
  ]
})
export class SharedModule {}
