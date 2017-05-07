import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../shared/services/admin.service';
import { AdminSocketService } from '../../../shared/services/admin-socket.service';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss']
})
export class ConsultationsListComponent implements OnInit {
  events: Array<Object>;
  filteredEvents = [];
  filteredValue = '';
  constructor(
    private adminService: AdminService,
    private adminSocketService: AdminSocketService
  ) {
    this.adminSocketService.getEvents();
  }

  ngOnInit() {
    this.adminService.getEvents().subscribe((events?) => {
      if (!events) {
        return false;
      }

      this.filteredEvents = events;
      this.events = events;
    });
  }

  onFilterConsultation(value) {
    this.filteredEvents = this.events.filter(consultation => {
      return consultation['name'].indexOf(value) !== -1;
    });
  }
}
