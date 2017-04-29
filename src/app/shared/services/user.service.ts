import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "../models/user";
import {CookieService} from "angular2-cookie/services/cookies.service";
import { Room } from "../models/room";
import { UserSocketService } from "./user_socket.service";

@Injectable()
export class UserService {
  private user = new BehaviorSubject<User>(null);
  private users = new BehaviorSubject<Array<User>>(null);
  private joinedToRoom = new BehaviorSubject<Boolean>(false);

  constructor(private cookieService: CookieService) {
    console.log('in user');
  }

  getUser() {
    return this.user;
  }

  logout(): void {
    this.cookieService.remove('token');
  }

  joinToRoom(room_id: number) {
    const self = this;

    this.user.subscribe((user?: User) => {
      if (!user) {
        return false;
      }

      const rooms = user.rooms.filter((room) => {
        return room.id === room_id;
      });

      self.joinedToRoom.next(rooms.length > 0);
    });
  }

  isJoinedToRoom(): BehaviorSubject<Boolean> {
    return this.joinedToRoom;
  }

  getUsers() {
    return this.users;
  }
}
