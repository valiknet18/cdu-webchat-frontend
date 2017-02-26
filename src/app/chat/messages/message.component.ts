import {Component, Input} from "@angular/core";
import {Message} from "../../shared/models/message";

@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})
export class MessageComponent {
  @Input() message: Message;
}
