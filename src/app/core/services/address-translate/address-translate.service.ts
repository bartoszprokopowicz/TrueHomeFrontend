import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressTranslateService {

constructor() { }

  async transToLatLong(city: string, street: string, address: string) {
    // SOME WEIRD CODE TO CREATE LONG AND LAT FROM ADDRESS:
    const longLat: {
      Long: number;
      Lat: number;
    } = {Long: 0, Lat: 0};
    longLat.Long = 0.234214;
    longLat.Lat = 1.124;
    return of(longLat).toPromise();
  }

}
