import { Component } from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserSocketService} from "../shared/services/user_socket.service";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userSocketService: UserSocketService) {
      this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.userSocketService.login({
      'user': this.loginForm.value
    }).subscribe(function (value) {
      console.log(value)
    }, function (error) {
      console.log(error)
    });
  }
}
