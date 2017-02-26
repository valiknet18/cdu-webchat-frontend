import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {Room} from "../models/room";

@Injectable()
export class RoomService {
  private room: BehaviorSubject<Room> = new BehaviorSubject(null);
  private currentRoom: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() {}

  getRoom() {
    return this.room;
  }

  getCurrentRoom() {
    return this.currentRoom;
  }
}
