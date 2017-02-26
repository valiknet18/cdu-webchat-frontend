import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Room} from "../models/room";

@Injectable()
export class RoomService {
  private room: BehaviorSubject<Room> = new BehaviorSubject(null);

  constructor() {}

  getRoom() {
    return this.room;
  }
}
