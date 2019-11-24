import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { PictureHttpService } from 'src/app/core/services/picture/http/picture-http.service';
import { AddressTranslateService } from 'src/app/core/services/address-translate/address-translate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FileUpload } from 'primeng/fileupload';

@Component({
  selector: 'app-apartment-edit',
  templateUrl: './apartment-edit.component.html',
  styleUrls: ['./apartment-edit.component.scss']
})
export class ApartmentEditComponent implements OnInit, OnDestroy {
  model: Apartment;
  photosToUpload: any[] = [];
  photos: any[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  response;

  @ViewChild('fileUpload', { static: false }) fileUpload: FileUpload;

  constructor(
    private apService: ApartmentHttpService,
    private phService: PictureHttpService,
    private transService: AddressTranslateService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) { }

  openFile(url: string) {
    let blob = null;
    const oReq = new XMLHttpRequest();
    oReq.open('GET', url, true);
    oReq.responseType = 'arraybuffer';
    const self = this;
    oReq.onload = function(oEvent) {
      blob = new Blob([oReq.response], { type: 'image/jpeg' });
      blob.lastModifiedDate = new Date();
      blob.name = url;
      blob.objectURL = (window.URL.createObjectURL(blob));
      self.fileUpload.files.push( blob as File);
      self.photos.push(blob as File);
    };
    oReq.send();
  }

  ngOnInit() {
    
    this.activeRouter.params.subscribe(async param => {
      this.model = await this.apService
        .getApartment(param.id)
        .toPromise();
      for (const photo of this.model.ImgList) {
        this.openFile(photo);
      }
    });
  }

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

  async getPhotos() { }

  async onEdit() {
    const re = await this.apService.updateApartment(this.model);
    for (const file of this.photosToUpload) {
      await this.photoUpload(file, this.response);
    }
    if (re) {
      this.router.navigate(['apartment/', this.response.id]);
    } else {
      console.log('ble');
    }
  }
}
