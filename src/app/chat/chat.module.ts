import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "./chat.routes";
import {ChatComponent, EmptyChatComponent} from "./chat.component";
import {MessagesComponent} from "./messages/messages.component";
import {MessageComponent} from "./messages/message.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {RoomComponent} from "./rooms/room.component";
import { CommonModule } from '@angular/common';
import {MembersComponent} from "./members/members.component";
import {MemberComponent} from "./members/member.component";
import {MessageFormComponent} from "./message-form/message-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";
import { JoinToRoomFormComponent } from './join-to-room-form/join-to-room-form.component';
import { CreateRoomFormComponent } from './create-room-form/create-room-form.component';
import { InviteUsersFormComponent } from './invite-users-form/invite-users-form.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessagesComponent,
    MessageComponent,
    RoomsComponent,
    RoomComponent,
    MembersComponent,
    MemberComponent,
    MessageFormComponent,
    EmptyChatComponent,
    JoinToRoomFormComponent,
    CreateRoomFormComponent,
    InviteUsersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [
    ChatComponent
  ]
})
export class ChatModule {}
