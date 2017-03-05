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
import {ReactiveFormsModule} from "@angular/forms";
import {MaterializeModule} from "angular2-materialize";

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
    EmptyChatComponent
  ],
  imports: [
    CommonModule,
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
