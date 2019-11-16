import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9-5ufSiX9xtdEdPz7XyCfqjlxbdz_vAI',
      libraries: ['places']
    })
  ]
})

export class GoogleMapsComponentsModule {}
