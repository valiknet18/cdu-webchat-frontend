import { Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registration.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'chat', loadChildren: 'app/chat/chat.module#ChatModule' }
];
