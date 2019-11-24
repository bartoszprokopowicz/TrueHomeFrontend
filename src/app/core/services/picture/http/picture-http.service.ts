import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PictureHttpService {

  API_URL = 'http://localhost:50649/api/';

  constructor(private http: HttpClient) { }

  getPicture(url: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        responseType: 'blob'
      })
    };

    return this.http.get<File>(
      url,
      httpOptions
    ).toPromise();
  }

  postPicture(file: File, id: number) {
    const formData = new FormData();
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };

    formData.append('uploads', file, file.name);

    return this.http.post<any>(
      this.API_URL + 'Pictures/' + id,
      formData,
      httpOptions
    );
  }

}
