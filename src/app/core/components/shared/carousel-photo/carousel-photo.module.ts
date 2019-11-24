import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselPhotoComponent } from './carousel-photo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [CarouselPhotoComponent],
  imports: [
    CommonModule,
    NgbModule,
    GalleriaModule
  ],
  exports: [
    CarouselPhotoComponent
  ]
})
export class CarouselPhotoModule { }
