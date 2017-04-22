import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationsListComponent } from './consultations-list.component';

describe('ConsultationsListComponent', () => {
  let component: ConsultationsListComponent;
  let fixture: ComponentFixture<ConsultationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
