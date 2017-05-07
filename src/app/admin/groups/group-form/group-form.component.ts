import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  @Input() group: Group = new Group();
  @Output() onSubmit = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: []
    });
  }

  onSubmitUser() {
    console.log(this.form.value);

    this.onSubmit.emit(this.form.value);
  }
}
