import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentingRoutingModule } from './renting-routing.module';

import { RentingUpdateComponent } from './renting-update/renting-update.component';
import { RentingCreateComponent } from './renting-create/renting-create.component';
import { RentingDeleteComponent } from './renting-delete/renting-delete.component';

import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

import { MaterialComponentsModule } from 'src/app/core/components/shared/material-components/material-components.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [RentingUpdateComponent, RentingCreateComponent, RentingDeleteComponent],
  imports: [
    CommonModule,
    RentingRoutingModule,
    CalendarModule,
    FormsModule,
    MaterialComponentsModule
  ],
  providers: [MessageService]
})
export class RentingModule { }
