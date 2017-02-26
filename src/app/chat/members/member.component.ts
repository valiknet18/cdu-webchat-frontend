import {Component, Input} from "@angular/core";
import {User} from "../../shared/models/user";

@Component({
  selector: 'member',
  templateUrl: './member.component.html'
})
export class MemberComponent {
  @Input() member: User;
}
