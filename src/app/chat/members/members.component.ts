import {Component, Input} from "@angular/core";
import {User} from "../../shared/models/user";

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styles: [
    `
      .preloader-area {
        margin-top: 50px
      }
    `
  ]
})
export class MembersComponent {
  @Input() members: User[];
}
