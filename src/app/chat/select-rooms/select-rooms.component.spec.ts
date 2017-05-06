import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRoomsComponent } from './select-rooms.component';

describe('SelectRoomsComponent', () => {
  let component: SelectRoomsComponent;
  let fixture: ComponentFixture<SelectRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
