import {Component, OnInit} from "@angular/core";
import {UserSocketService} from "../../services/user_socket.service";

@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styles: [
    'navigation.component.scss'
  ]
})
export class NavigationComponent implements OnInit {
  isAuthorized: boolean = false;

  constructor(private userSocketService: UserSocketService) {}

  ngOnInit() {
    let self = this;

    this.userSocketService
      .getCurrentUser()
      .subscribe(function (value) {
        self.isAuthorized = true;
        console.log(value)
      }, function (error) {
        self.isAuthorized = false;
        console.log(error)
      });
  }
}
