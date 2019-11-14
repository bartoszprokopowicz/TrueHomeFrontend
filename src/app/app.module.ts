import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ApartmentModule } from './pages/apartment/apartment.module';
import { UserModule } from './pages/user/user.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/layout/navbar/navbar.component';
import { ContainerComponent } from './pages/shared/layout/container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApartmentModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
