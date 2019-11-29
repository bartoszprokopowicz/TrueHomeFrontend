import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Renting } from 'src/app/models/renting';

@Injectable({
  providedIn: 'root'
})
export class RentingHttpService {

  constructor(private http: HttpClient) { }

  public addRenting(idAp: number, renting: Renting) {
    renting.iDAp = idAp;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<{ id: number, UploadStatus: number }>(environment.apiURL + 'Rentings', renting, httpOptions);
  }

  public updateRenting(idAp: number, renting: Renting) {
    renting.iDAp = idAp;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post<{ id: number, UploadStatus: number }>(environment.apiURL + 'Rentings', renting, httpOptions);
  }

  getRenting() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.get<Renting>(environment.apiURL + 'Rentings/' + 'getByUser', httpOptions);
  }


}
