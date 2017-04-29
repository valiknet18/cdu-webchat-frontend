import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteUsersFormComponent } from './invite-users-form.component';

describe('InviteUsersFormComponent', () => {
  let component: InviteUsersFormComponent;
  let fixture: ComponentFixture<InviteUsersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteUsersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
