import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { Subject } from 'rxjs';
import { PictureHttpService } from 'src/app/core/services/picture/http/picture-http.service';
import { takeUntil } from 'rxjs/operators';
import { AddressTranslateService } from 'src/app/core/services/address-translate/address-translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartment-create',
  templateUrl: './apartment-create.component.html',
  styleUrls: ['./apartment-create.component.scss']
})
export class ApartmentCreateComponent implements OnInit, OnDestroy {
  model: Apartment;
  photosToUpload: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  response;

  constructor(
    private apService: ApartmentHttpService,
    private phService: PictureHttpService,
    private transService: AddressTranslateService,
    private router: Router
  ) {
    this.model = new Apartment();
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  addListPhoto(event) {
    for (const file of event.files) {
      this.photosToUpload.push(file);
    }
    console.log(this.photosToUpload);
  }

  removePhoto(event) {
    const photosTemp = this.photosToUpload.filter(photo => {
      return event.file !== photo;
    });
    this.photosToUpload = photosTemp;
  }

  async apartmentUpload() {
    const longLat = await this.transService.transToLatLong(
      this.model.City,
      this.model.Street,
      this.model.ApartmentNumber
    );
    this.model.Long = longLat.Long;
    this.model.Lat = longLat.Lat;
    return this.apService
      .postApartment(this.model)
      .pipe(takeUntil(this.destroy$))
      .toPromise();
  }

  async photoUpload(file, params: { id: number; UploadStatus: number }) {
    return this.phService.postPicture(file, params.id).toPromise();
  }

  async tempOnSave() {
    this.response = await this.apartmentUpload();
    for (const file of this.photosToUpload) {
      await this.photoUpload(file, this.response);
    }
    console.log(this.model);
    if (this.response.UploadStatus === 1) {
      this.router.navigate(['apartment/', this.response.id]);
    } else {
      console.log('ble');
    }
  }
}
