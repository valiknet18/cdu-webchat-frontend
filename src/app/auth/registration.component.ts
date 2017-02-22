import { Component } from "@angular/core";
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {UserSocketService} from "../shared/services/user_socket.service";

@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private fb: FormBuilder, private userSocketService: UserSocketService) {
    this.createForm()
  }

  private createForm() {
    this.registrationForm = this.fb.group({
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      password: ''
    });
  }

  onSubmit() {
    let self = this;

    this.userSocketService.registration({
      'user': this.registrationForm.value
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
        console.log(error)
      }
    );
  }
}
