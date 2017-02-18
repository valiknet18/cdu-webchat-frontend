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
    ReactiveFormsModule
  ],
  providers: [
    UserSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
