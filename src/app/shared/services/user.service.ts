import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "../models/user";
import {CookieService} from "angular2-cookie/services/cookies.service";
import { Room } from "../models/room";
import { UserSocketService } from "./user_socket.service";
import { Group } from '../models/group';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<User|null>(null);
  private users = new BehaviorSubject<Array<User>>(null);
  private joinedToRoom = new BehaviorSubject<Boolean>(false);
  private groups = new BehaviorSubject<Array<Group>>(null);
  isLoggedIn: boolean = false;

  constructor(private cookieService: CookieService) {
    console.log('in user');
  }

  getUser() {
    return this.user;
  }

  logout(): void {
    this.cookieService.remove('token');
  }

  joinToRoom(selectedRoom: Room) {
    const self = this;

    this.user.subscribe((user?: User) => {
      if (!user) {
        return false;
      }

      let isJoinedToRoom = false;

      if (user.role === 'student') {
        isJoinedToRoom = user.group.rooms.filter((room) => {
          return room.id === selectedRoom.id;
        }).length > 0;
      } else {
        isJoinedToRoom = selectedRoom.teacher.id === user.id;
      }

      console.log(isJoinedToRoom);

      self.joinedToRoom.next(isJoinedToRoom);
    });
  }

  isJoinedToRoom(): BehaviorSubject<Boolean> {
    return this.joinedToRoom;
  }

  getUsers() {
    return this.users;
  }

  getGroups() {
    return this.groups;
  }
}
