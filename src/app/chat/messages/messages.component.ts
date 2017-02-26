import {Component, Input, OnInit} from "@angular/core";
import {Message} from "../../shared/models/message";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  @Input() messages?: Message[] = [];

  ngOnInit() {}
}
