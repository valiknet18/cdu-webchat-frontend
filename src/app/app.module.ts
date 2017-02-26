import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { MaterializeModule } from 'angular2-materialize';
import { routes } from "./app.routes";

import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppComponent } from './app.component';
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registration.component";
import {UserSocketService} from "./shared/services/user_socket.service";

import { CookieService } from 'angular2-cookie/services/cookies.service';
import {UserService} from "./shared/services/user.service";
import {ChatModule} from "./chat/chat.module";
import {SocketService} from "./shared/services/socket.service";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IndexComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    ReactiveFormsModule,
    SharedModule
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
