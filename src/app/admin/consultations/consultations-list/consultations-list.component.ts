import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultations-list',
  templateUrl: './consultations-list.component.html',
  styleUrls: ['./consultations-list.component.scss']
})
export class ConsultationsListComponent implements OnInit {
  consultations: Array<Object> = [
    {name: 'Консультація 1', date: '10.10.2017 10:20:30', teacher: 'Викладач 1'},
    {name: 'Консультація 2', date: '10.10.2017 10:20:30', teacher: 'Викладач 1'},
    {name: 'Консультація 3', date: '10.10.2017 10:20:30', teacher: 'Викладач 2'},
    {name: 'Консультація 4', date: '10.10.2017 10:20:30', teacher: 'Викладач 3'},
    {name: 'Консультація 5', date: '10.10.2017 10:20:30', teacher: 'Викладач 1'},
  ];
  filteredConsultations = [];
  filteredValue = '';
  constructor() { }

  ngOnInit() {
    this.filteredConsultations = this.consultations;
  }

  onFilterConsultation(value) {
    this.filteredConsultations = this.consultations.filter(consultation => {
      return consultation['name'].indexOf(value) !== -1 || consultation['teacher'].indexOf(value) !== -1;
    });
  }
}
