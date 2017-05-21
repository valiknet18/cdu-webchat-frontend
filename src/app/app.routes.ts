import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistrationComponent } from './auth/registration.component';
import { ChatComponent } from './shared/layouts/chat/chat.component';
import { MainComponent } from './shared/layouts/main/main.component';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

export const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: '', pathMatch: 'full', component: IndexComponent},
    { path: 'profile', canActivate: [AuthGuardService], children: [
      { path: 'settings', component: SettingsComponent }
    ]},
    { path: 'login', component: LoginComponent},
    { path: 'registration', component: RegistrationComponent},
    { path: 'events', canActivate: [AuthGuardService], children: [
      {
        path: '',
        pathMatch: 'full',
        component: EventsListComponent
      },
      {
        path: 'create',
        component: CreateEventComponent
      },
      {
        path: ':id/edit',
        component: EditEventComponent
      }
    ]}
  ]},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService], loadChildren: 'app/chat/chat.module#ChatModule' }
];
