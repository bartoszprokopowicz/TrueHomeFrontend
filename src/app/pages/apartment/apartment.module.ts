import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentRoutingModule } from './apartment-routing.module';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { ApartmentCreateComponent } from './apartment-create/apartment-create.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { ApartmentThumbComponent } from './apartment-thumb/apartment-thumb.component';
import { SearchBarModule } from 'src/app/core/components/shared/search-bar/search-bar.module';
import { MaterialComponentsModule } from 'src/app/core/components/shared/material-components/material-components.module';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentEditComponent,
    ApartmentCreateComponent,
    ApartmentDetailsComponent,
    ApartmentThumbComponent,
  ],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
    SearchBarModule,
    MaterialComponentsModule
  ]
})
export class ApartmentModule { }
