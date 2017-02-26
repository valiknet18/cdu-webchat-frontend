import { Component } from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserSocketService } from "../shared/services/user_socket.service";
import { User } from "../shared/models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  user: User;

  constructor(private fb: FormBuilder, private userSocketService: UserSocketService, private router: Router) {
      this.createForm();

      console.log(2);
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      password: ['', [
        Validators.required
      ]]
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

            setTimeout(function () {
              self.router.navigate(['/'])
            }, 2000)
          }
        },
        (error) => {
          console.log(error);
        }
    );
  }
}
