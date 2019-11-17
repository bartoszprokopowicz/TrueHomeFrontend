import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApartmentList } from 'src/app/models/apartmentList';
import { Apartment } from 'src/app/models/apartment';


@Injectable({
  providedIn: 'root'
})
export class ApartmentHttpService {

  API_URL = 'http://localhost:50649/api/';

  constructor(private http: HttpClient) { }

  getApartmentList(limitOffset: {limit: number, offset: number}): Observable<ApartmentList> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http
              .post<any>(this.API_URL + 'Apartments', limitOffset, httpOptions);
  }

  getApartment(id: number): Observable<Apartment> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http
              .get<any>(this.API_URL + 'Apartments/' + id);
  }
}
