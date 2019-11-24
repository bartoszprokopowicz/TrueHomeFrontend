import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from 'src/app/models/auth';
import { Router } from '@angular/router';
import { RefreshResponse } from 'src/app/models/refresh-response';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserData } from 'src/app/models/user-data';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  API_URL = 'http://localhost:50649/api/';

  private auth: Auth;
  private currentUser: string;

  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  public register(register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post(
      this.API_URL + 'Auth/register',
      register,
      httpOptions
    ).toPromise();
  }

  public async refresh() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const refreshToken = localStorage.getItem('refresh_token');
    const currentUser = localStorage.getItem('current_user');

    const response = await this.http.post<RefreshResponse>(
      this.API_URL + 'Auth/refresh',
      {refreshToken, login: currentUser},
      httpOptions
    ).toPromise();

    if (response) {
      localStorage.setItem('token_type', response.token_type);
      localStorage.setItem('access_token', response.access_token);
      localStorage.setItem('expires_in', response.expires_in.toString());
      return true;
    } else {
      return false;
    }
  }

  public async login(login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    this.auth = await this.http.post<Auth>(
      this.API_URL + 'Auth/login',
      login,
      httpOptions
    ).toPromise();

    if (this.auth.expires_in > 0) {
      this.saveAuth(this.auth, login);
      return true;
    } else {
      return false;
    }
  }

  saveAuth(auth: Auth, login) {
    localStorage.setItem('token_type', this.auth.token_type);
    localStorage.setItem(this.auth.token_type, this.auth.access_token);
    localStorage.setItem('expires_in', this.auth.expires_in.toString());
    localStorage.setItem('refresh_token', this.auth.refresh_token);
    localStorage.setItem('current_user', login.login);
  }

  deleteAuth() {
    const tokenType = localStorage.getItem('token_type');
    localStorage.removeItem(tokenType);
    localStorage.removeItem('expires_in');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('current_user');
    localStorage.removeItem('token_type');
  }

  public isLogged() {
    const tokenType = localStorage.getItem('token_type');
    const token = localStorage.getItem(tokenType);

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    return false;
  }

  public logout() {
    this.deleteAuth();
    this.router.navigate(['/']);
  }

  public async getDetails() {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    const userData = await this.http.get<UserData>(
      this.API_URL + 'User/details',
      httpOptions
    ).toPromise();

    return userData;
  }

  public get Auth() {
    return this.auth;
  }
}
