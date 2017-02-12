import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { AppComponent } from './app.component';
import { IndexComponent } from "./index/index.component";
import { LoginComponent } from "./auth/login.component";
import { RegistrationComponent } from "./auth/registration.component";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    IndexComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
