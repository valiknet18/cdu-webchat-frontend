import {Routes} from "@angular/router";
import {ChatComponent, EmptyChatComponent} from "./chat.component";

export const routes: Routes = [
  { path: '', component: EmptyChatComponent},
  { path: ':id', component: ChatComponent}
];
