import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinToRoomFormComponent } from './join-to-room-form.component';

describe('JoinToRoomFormComponent', () => {
  let component: JoinToRoomFormComponent;
  let fixture: ComponentFixture<JoinToRoomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinToRoomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinToRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
