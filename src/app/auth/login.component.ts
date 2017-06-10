import { Component, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UserSocketService } from "../shared/services/user_socket.service";
import { User } from "../shared/models/user";
import {Router} from "@angular/router";
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: [
    'login.component.scss'
  ]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  user: User;
  loginAction = new EventEmitter<MaterializeAction|string>();
  loginErrorAction = new EventEmitter<MaterializeAction|string>();

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
            self.loginErrorAction.emit('toast');
          }

          if ('success' in attributes) {
            self.successMessage = attributes['success'];
            self.loginAction.emit('toast');

            setTimeout(function () {
              self.router.navigate(['/']);
            }, 500);
          }
        },
        (error) => {
          console.log(error);
        }
    );
  }
}
