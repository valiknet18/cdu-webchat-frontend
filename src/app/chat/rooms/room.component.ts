import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Room} from "../../shared/models/room";

@Component({
  selector: 'room',
  templateUrl: 'room.component.html'
})
export class RoomComponent {
  @Input() room: Room;
  @Output() changeRoom: EventEmitter<Room> = new EventEmitter();

  onSelectRoom() {
    this.changeRoom.next(this.room);
  }
}
