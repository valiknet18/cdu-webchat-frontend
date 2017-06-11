import { Component, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {UserSocketService} from "../shared/services/user_socket.service";
import {User} from "../shared/models/user";
import { MaterializeAction } from 'angular2-materialize';
import { Router } from '@angular/router';

@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html',
  styleUrls: [
    'registration.component.scss'
  ]
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  errorMessage: string;
  successMessage: string;
  user: User = new User();

  registrationAction = new EventEmitter<MaterializeAction|string>();
  registrationErrorAction = new EventEmitter<MaterializeAction|string>();

  constructor(private fb: FormBuilder, private userSocketService: UserSocketService, private router: Router) {
    this.createForm();
  }

  private createForm() {
    this.registrationForm = this.fb.group({
      first_name: [this.user.first_name, [
        Validators.required,
      ]],
      last_name: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]],
      username: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  onSubmit() {
    let self = this;

    if (!this.registrationForm.valid) {
      return false;
    }

    this.userSocketService.registration({
      'user': this.registrationForm.value
    }).subscribe(
      (attributes) => {
        self.errorMessage = '';
        self.successMessage = '';

        if ('error' in attributes) {
          this.registrationErrorAction.emit('toast');
        }

        if ('success' in attributes) {
          this.registrationAction.emit('toast');
          this.router.navigate(['/']);
        }
      },
      (error) => {
        this.registrationErrorAction.emit('toast');
        console.log(error);
      }
    );
  }
}
