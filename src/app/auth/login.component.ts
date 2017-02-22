import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { UserSocketService } from "../shared/services/user_socket.service";
import { User } from "../shared/models/user";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  user: User;

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
    let self = this;

    this.userSocketService.login({
      'user': this.loginForm.value
    }).subscribe(
        (attributes) => {
          self.errorMessage = '';
          self.successMessage = '';

          if ('error' in attributes) {
            self.errorMessage = attributes['error'];
          }

          if ('success' in attributes) {
            self.successMessage = attributes['success'];
          }
        },
        (error) => {
          console.log(error);
        }
    );
  }
}
