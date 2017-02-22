import {Component, OnInit} from "@angular/core";
import {UserSocketService} from "../../services/user_socket.service";
import {User} from "../../models/user";
import {CookieService} from "angular2-cookie/services/cookies.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'main-navigation',
  templateUrl: './navigation.component.html',
  styles: [
    'navigation.component.scss'
  ]
})
export class NavigationComponent implements OnInit {
  isAuthorized: boolean = false;

  constructor(private userSocketService: UserSocketService, private userService: UserService) {}

  ngOnInit() {
    let self = this;

    this.userSocketService
      .getCurrentUser()
      .subscribe(function (user?: User) {
        if (!user) {
          self.isAuthorized = false;

          return false;
        }

        self.isAuthorized = true;

        console.log(user)
      }, function (error) {
        console.log(error)
      });
  }

  onLogout(): void {
    this.userService.logout();
    this.userService.getUser().next(null);
  }
}
