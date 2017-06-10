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
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    NavigationComponent,
    FooterComponent
  ],
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
