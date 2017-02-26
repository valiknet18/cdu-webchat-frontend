import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./chat.routes";
import {ChatComponent} from "./chat.component";
import {MessagesComponent} from "./messages/messages.component";
import {MessageComponent} from "./messages/message.component";
import {RoomsComponent} from "./channels/rooms.component";
import {RoomComponent} from "./channels/room.component";
import {RoomService} from "../shared/services/room.service";
import {RoomSocketService} from "../shared/services/room_socket.service";
import {UserService} from "../shared/services/user.service";
import {SocketService} from "../shared/services/socket.service";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    RoomsComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RoomService,
    RoomSocketService,
    UserService,
    SocketService
  ],
  bootstrap: []
})
export class ChatModule {}
