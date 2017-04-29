import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-room-form',
  templateUrl: './create-room-form.component.html',
  styleUrls: ['./create-room-form.component.scss']
})
export class CreateRoomFormComponent implements OnInit {
  @Output() createRoom = new EventEmitter();
  @Output() closeForm = new EventEmitter();

  roomForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.roomForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]]
    });
  }

  onCreateRoom() {
    console.log(this.roomForm);

    this.createRoom.emit(this.roomForm.value);
    this.roomForm.reset();

    // this.roomSocketService.createRoom(this.roomForm);
  }

  onCloseForm() {
    this.closeForm.emit();
  }
}
