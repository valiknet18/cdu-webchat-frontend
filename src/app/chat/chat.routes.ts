import {Routes} from "@angular/router";
import {ChatComponent} from "./chat.component";

export const routes: Routes = [
  { path: '', component: ChatComponent},
  { path: ':id', component: ChatComponent}
];
