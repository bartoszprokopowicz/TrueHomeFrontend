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
import { CarouselPhotoModule } from 'src/app/core/components/shared/carousel-photo/carousel-photo.module';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    ApartmentListComponent,
    ApartmentEditComponent,
    ApartmentCreateComponent,
    ApartmentDetailsComponent,
    ApartmentThumbComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ApartmentRoutingModule,
    RatingModule,
    SearchBarModule,
    MaterialComponentsModule,
    CarouselPhotoModule,
    InputTextModule,
    EditorModule,
    FileUploadModule
  ],
  exports: [
    ApartmentThumbComponent
  ]
})
export class ApartmentModule { }
