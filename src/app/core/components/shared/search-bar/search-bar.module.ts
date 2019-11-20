import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule
  ],
  exports: [
    SearchBarComponent
  ]
})
export class SearchBarModule { }
