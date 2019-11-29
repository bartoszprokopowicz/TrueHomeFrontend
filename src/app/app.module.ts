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
import { GoogleMapsComponentsModule } from './core/components/shared/google-maps-components/google-maps-components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchBarModule } from './core/components/shared/search-bar/search-bar.module';
import { CarouselPhotoModule } from './core/components/shared/carousel-photo/carousel-photo.module';
import { JwtInterceptor } from './core/interceptors/Jwt-interceptor';
import { ErrorInterceptor } from './core/interceptors/error-interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';
import { RentingModule } from './pages/renting/renting.module';
import { RatingModule } from 'primeng/rating';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

export function tokenGetter() {
  const tokenType = localStorage.getItem('token_type');
  return localStorage.getItem(tokenType);
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    WelcomeComponent,
  ],
  imports: [
    MessageModule,
    MessagesModule,
    BrowserModule,
    AppRoutingModule,
    ApartmentModule,
    UserModule,
    LoginModule,
    RentingModule,
    RatingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    GoogleMapsComponentsModule,
    HttpClientModule,
    SearchBarModule,
    CarouselPhotoModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:50649'],
        blacklistedRoutes: []
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
