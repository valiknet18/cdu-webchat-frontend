import { Component, EventEmitter, OnInit } from '@angular/core';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {
  createGroupActions = new EventEmitter<MaterializeAction|string>();

  constructor(
    private adminSocketService: AdminSocketService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onCreateGroup(group) {
    console.log('New group creating');

    this.adminSocketService.createGroup(group);
    this.createGroupActions.emit('toast');
    this.router.navigate(['/admin/groups']);
  }
}
