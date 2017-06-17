import {Component, Input} from "@angular/core";
import {Message} from "../../shared/models/message";

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styles: [`
      .message-image {
        max-width: 250px;
        display: inline-block;
        margin: 2px 10px;
      }
  `]
})
export class MessageComponent {
  @Input() message: Message;
}
