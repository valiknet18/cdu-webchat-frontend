import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { Group } from '../../../shared/models/group';

@Component({
  selector: 'app-groups-list',
  templateUrl: './groups-list.component.html',
  styleUrls: ['./groups-list.component.scss']
})
export class GroupsListComponent implements OnInit {
  groups: Array<Group> = [];
  filteredGroups: Array<Group> = [];
  filteredValue = '';
  constructor(
    private adminService: AdminService,
    private adminSocketService: AdminSocketService
  ) {
    this.adminSocketService.getGroups();
  }

  ngOnInit() {
    this.adminService.getGroups().subscribe((groups?) => {
      if (!groups) {
        return false;
      }

      console.log(groups);

      this.filteredGroups = groups;
      this.groups = groups;
    });
  }

  onFilterGroup(value) {
    this.filteredGroups = this.groups.filter(group => {
      return group['name'].indexOf(value) !== -1;
    });
  }

  onDelete(group) {
    this.adminSocketService.deleteGroup(group);
  }
}
