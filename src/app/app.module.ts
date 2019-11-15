import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ApartmentModule } from './pages/apartment/apartment.module';
import { UserModule } from './pages/user/user.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './pages/shared/layout/navbar/navbar.component';
import { ContainerComponent } from './pages/shared/layout/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './pages/shared/components/material-components/material-components.module';
import { LoginModule } from './pages/login/login.module';
import { WelcomeComponent } from './pages/shared/layout/welcome/welcome.component';



@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApartmentModule,
    UserModule,
    LoginModule,
    BrowserAnimationsModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
