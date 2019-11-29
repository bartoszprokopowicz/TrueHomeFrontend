import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { ApartmentModule } from '../apartment/apartment.module';
import { RentingViewModule } from 'src/app/core/components/shared/renting-view/renting-view.module';

@NgModule({
  declarations: [UserListComponent, UserDetailsComponent, UserEditComponent, UserSettingsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ApartmentModule,
    RentingViewModule
  ]
})
export class UserModule { }
