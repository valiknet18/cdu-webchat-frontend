import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registration.component";
import {ChatComponent} from "./shared/layouts/chat/chat.component";
import {MainComponent} from "./shared/layouts/main/main.component";

export const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', pathMatch: 'full', component: IndexComponent},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  ]},
  { path: 'chat', component: ChatComponent, loadChildren: 'app/chat/chat.module#ChatModule' }
];
