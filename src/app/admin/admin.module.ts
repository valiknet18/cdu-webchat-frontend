import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './admin.routes';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { IndexComponent } from './index/index.component';
import { CommonModule } from "@angular/common";
import { MaterializeModule } from "angular2-materialize";
import { UserFormComponent } from './users/user-form/user-form.component';
import { FormsModule } from "@angular/forms";
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { EditGroupComponent } from './groups/edit-group/edit-group.component';
import { GroupFormComponent } from './groups/group-form/group-form.component';
import { ConsultationsListComponent } from './consultations/consultations-list/consultations-list.component';

@NgModule({
  declarations: [UsersListComponent, CreateUserComponent, EditUserComponent, IndexComponent, UserFormComponent, GroupsListComponent, CreateGroupComponent, EditGroupComponent, GroupFormComponent, ConsultationsListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MaterializeModule,
    FormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule {}
