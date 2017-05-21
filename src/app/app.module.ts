import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';
import { routes } from './app.routes';

import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistrationComponent } from './auth/registration.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './shared/layouts/main/main.component';
import { ChatComponent } from './shared/layouts/chat/chat.component';
import { AdminComponent } from './shared/layouts/admin/admin.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EventFormComponent } from './events/event-form/event-form.component';
import { DateTimePickerModule } from 'ng-pick-datetime';
import { SettingsComponent } from './profile/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IndexComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    MainComponent,
    ChatComponent,
    AdminComponent,
    EventsListComponent,
    CreateEventComponent,
    EditEventComponent,
    EventFormComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    ReactiveFormsModule,
    SharedModule,
    DateTimePickerModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
