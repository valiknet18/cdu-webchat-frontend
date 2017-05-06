import {Routes} from "@angular/router";
import {ChatComponent} from "./chat.component";
import { SelectRoomsComponent } from "./select-rooms/select-rooms.component";

export const routes: Routes = [
  { path: '', component: SelectRoomsComponent},
  { path: ':id', component: ChatComponent}
];
