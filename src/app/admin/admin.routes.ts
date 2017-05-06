import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { CreateGroupComponent } from './groups/create-group/create-group.component';
import { EditGroupComponent } from './groups/edit-group/edit-group.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { ConsultationsListComponent } from "./consultations/consultations-list/consultations-list.component";

export const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'users', children: [
    {path: 'create', component: CreateUserComponent},
    {path: ':id/edit', component: EditUserComponent},
    {path: '', component: UsersListComponent},
  ]},
  {path: 'groups', children: [
    {path: 'create', component: CreateGroupComponent},
    {path: 'item/edit', component: EditGroupComponent},
    {path: '', component: GroupsListComponent},
  ]},
  {path: 'consultations', children: [
    {path: '', component: ConsultationsListComponent},
  ]}
];
