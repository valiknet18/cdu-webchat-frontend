import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Room} from "../../shared/models/room";

@Component({
  selector: 'rooms',
  templateUrl: 'rooms.component.html'
})
export class RoomsComponent {
  @Input() rooms: Room[];
  @Output() selectRoom: EventEmitter<number> = new EventEmitter();

  onSelectRoom(room: Room) {
    console.log(room);
    this.selectRoom.next(room.id);
  }
}
