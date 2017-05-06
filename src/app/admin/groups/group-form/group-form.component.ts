import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../shared/models/group';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {
  @Input() group: Group = new Group();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formBuilder.group({
      name: []
    });
  }

}
