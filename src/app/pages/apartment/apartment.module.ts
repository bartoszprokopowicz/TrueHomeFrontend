import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { ApartmentCreateComponent } from './apartment-create/apartment-create.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';

@NgModule({
  declarations: [ApartmentListComponent, ApartmentEditComponent, ApartmentCreateComponent, ApartmentDetailsComponent],
  imports: [
    CommonModule,
    ApartmentRoutingModule
  ]
})
export class ApartmentModule { }
