import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ApartmentModule } from './pages/apartment/apartment.module';
import { UserModule } from './pages/user/user.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ContainerComponent } from './layout/container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './core/components/shared/material-components/material-components.module';
import { LoginModule } from './pages/login/login.module';
import { WelcomeComponent } from './layout/welcome/welcome.component';
import { SearchBarComponent } from './core/components/shared/search-bar/search-bar.component';
import { GoogleMapsComponentsModule } from './core/components/shared/google-maps-components/google-maps-components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    WelcomeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApartmentModule,
    UserModule,
    LoginModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    GoogleMapsComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
