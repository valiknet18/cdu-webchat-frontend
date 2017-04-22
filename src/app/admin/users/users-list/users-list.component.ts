import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: Array<Object> = [
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Студент1', last_name: 'Студентський', username: 'student1', email: 'student@example.com', role: 'Студент'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Студент2', last_name: 'Студентський', username: 'student1', email: 'student@example.com', role: 'Студент'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Студент3', last_name: 'Студентський', username: 'student1', email: 'student@example.com', role: 'Студент'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Студент4', last_name: 'Студентський', username: 'student1', email: 'student@example.com', role: 'Студент'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Студент5', last_name: 'Студентський', username: 'student1', email: 'student@example.com', role: 'Студент'},
    {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7WoaSlI0VlFbyrZ-QC-POW4gtGdn2W6oiklNvOXsLWODCgFyqIvG6E', first_name: 'Викладач', last_name: 'Викладачськи', username: 'student1', email: 'student@example.com', role: 'Викладач'},
  ];
  filteredUsers: Array<Object> = [];
  filteredValue = '';
  constructor() { }

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  onFilterUsers(value) {
    const self = this;

    this.filteredUsers = this.users.filter(user => {
      return user['first_name'].indexOf(value) !== -1 || user['last_name'].indexOf(value) !== -1;
    });
  }
}
