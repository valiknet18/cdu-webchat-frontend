import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "../models/user";
import {CookieService} from "angular2-cookie/services/cookies.service";

@Injectable()
export class UserService {
  private user = new BehaviorSubject<User>(null);

  constructor(private cookieService: CookieService) {
    console.log('in user');
  }

  getUser() {
    return this.user;
  }

  logout(): void {
    this.cookieService.remove('token');
  }
}
