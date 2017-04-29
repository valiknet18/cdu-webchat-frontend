import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-join-to-room-form',
  templateUrl: './join-to-room-form.component.html',
  styleUrls: ['./join-to-room-form.component.scss']
})
export class JoinToRoomFormComponent implements OnInit {
  @Output() joinToRoom = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onJoinToRoom() {
   this.joinToRoom.emit();
  }
}
