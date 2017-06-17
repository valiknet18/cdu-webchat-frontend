import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    
    .image-item-container {
      width: 70%;
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
      ]],
      images: this.formBuilder.array([
      ])
    });
  }

  onSend() {
    this.sendMessage.next(this.messageForm.value);

    const control = <FormArray> this.messageForm.controls['images'];

    if (control.controls.length > 0) {
      for (let i = 0; i < control.controls.length; i++) {
        control.removeAt(i);
      }

      control.removeAt(0);
    }

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

  onAddImage() {
    const control = <FormArray> this.messageForm.controls['images'];
    control.push(this.formBuilder.control(''));
  }

  onRemoveImage(position) {
    const control = <FormArray> this.messageForm.controls['images'];
    control.removeAt(position);
  }
}
