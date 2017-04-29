import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html'
})
export class MessageFormComponent implements OnInit {
  @Output() sendMessage = new EventEmitter();
  messageForm: FormGroup;

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
}
