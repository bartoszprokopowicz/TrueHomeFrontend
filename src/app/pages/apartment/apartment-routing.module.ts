import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentListComponent } from './apartment-list/apartment-list.component';
import { ApartmentEditComponent } from './apartment-edit/apartment-edit.component';
import { ApartmentCreateComponent } from './apartment-create/apartment-create.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';


const routes: Routes = [
  {path: 'apartments', component: ApartmentListComponent},
  {path: 'apartment/:id/edit', component: ApartmentEditComponent},
  {path: 'apartment/add', component: ApartmentCreateComponent},
  {path: 'apartment/:id', component: ApartmentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule { }
