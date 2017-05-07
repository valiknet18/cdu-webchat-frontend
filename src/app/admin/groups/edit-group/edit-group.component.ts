import { Component, group, OnDestroy, OnInit } from '@angular/core';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { ActivatedRoute } from '@angular/router';
import { Group } from '../../../shared/models/group';
import { AdminService } from '../../../shared/services/admin.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.scss']
})
export class EditGroupComponent implements OnInit, OnDestroy {
  private sub: any;
  group: Group = new Group();

  constructor(
    private route: ActivatedRoute,
    private adminSocketService: AdminSocketService,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.adminSocketService.getGroup(+params['id']);
    });

    this.adminService.getGroup().subscribe((group?) => {
      if (!group) {
        return false;
      }

      this.group = group;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onEditGroup(group) {
    group['id'] = this.group.id;

    this.adminSocketService.editGroup(group);
  }
}
