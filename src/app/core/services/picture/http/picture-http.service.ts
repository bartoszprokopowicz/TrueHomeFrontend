import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureHttpService {

  API_URL = 'http://localhost:50649/api/';

  constructor() { }

  getPicture() {
    return null;
  }

}
