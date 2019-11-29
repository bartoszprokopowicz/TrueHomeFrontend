import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentingCreateComponent } from './renting-create/renting-create.component';
import { RentingDeleteComponent } from './renting-delete/renting-delete.component';
import { RentingUpdateComponent } from './renting-update/renting-update.component';


const routes: Routes = [
  {path: 'apartment/:id/renting/create', component: RentingCreateComponent},
  {path: 'apartment/:id/renting/cancel', component: RentingDeleteComponent},
  {path: 'apartment/:id/renting/edit', component: RentingUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentingRoutingModule { }
