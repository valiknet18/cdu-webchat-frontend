import {Component, OnInit} from "@angular/core";
import {UserSocketService} from "../shared/services/user_socket.service";

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  constructor(private userSocketService: UserSocketService) {}

  ngOnInit() {
    this.userSocketService
      .getCurrentUser()
      .subscribe(function (value) {
        console.log(value)
      }, function (error) {
        console.log(error)
      });
  }
}
