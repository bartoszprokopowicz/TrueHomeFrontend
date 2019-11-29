import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentingViewComponent } from './renting-view.component';



@NgModule({
  declarations: [RentingViewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RentingViewComponent
  ]
})
export class RentingViewModule { }
