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

  getApartmentList(limitOffset: {
    limit: number;
    offset: number;
  }): Observable<ApartmentList> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.post<any>(
      this.API_URL + 'Apartments',
      limitOffset,
      httpOptions
    );
  }

  getApartment(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };

    return this.http.get<any>(this.API_URL + 'Apartments/' + id);
  }
  // {\"id\": " + id + ", \"UploadStatus\": " + 1 + "}
  postApartment(
    apartment: Apartment
  ): Observable<{ id: number; UploadStatus: number }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      })
    };
    return this.http.post<{ id: number; UploadStatus: number }>(
      this.API_URL + 'Apartments/add',
      apartment,
      httpOptions
    );
  }

  updateApartment(apartment: Apartment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json'
      })
    };

    return this.http.put(
      this.API_URL + 'Apartments',
      apartment,
      httpOptions
    ).toPromise();
  }
}
