import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  groups: Array<Object> = [
    {name: 'КЕ-12', count_students: 10},
    {name: 'КІ-12', count_students: 15},
    {name: 'КС-12', count_students: 13},
    {name: 'КМ-12', count_students: 16},
  ];
  filteredGroups: Array<Object> = [];
  filteredValue = '';
  constructor() { }

  ngOnInit() {
    this.filteredGroups = this.groups;
  }

  onFilterGroup(value) {
    this.filteredGroups = this.groups.filter(group => {
      return group['name'].indexOf(value) !== -1;
    });
  }
}
