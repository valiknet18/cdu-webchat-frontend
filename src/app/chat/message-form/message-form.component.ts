import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styles: [`
    .message-input {
      width: 70%;
      display: inline-block;
      margin-left: 18px;
      margin-top: 14px;
    }
    
    .send-button {
      width: 20%;
      display: inline-block;
    }
  `]
})
export class MessageFormComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();
  messageForm: FormGroup;
  sendMessageAction = new EventEmitter<MaterializeAction|string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      message: ['', [
        Validators.required
      ]]
    });
  }

  onSend() {
    this.sendMessage.next(this.messageForm.value);
    this.messageForm.reset();
  }

  onChangeMessage() {
    if (
      !this.messageForm.controls.message.valid &&
      this.messageForm.controls.message.dirty &&
      this.messageForm.controls.message.errors &&
      this.messageForm.controls.message.errors.required
    ) {
      this.sendMessageAction.emit('toast');
    }
  }
}
