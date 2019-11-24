import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from 'src/app/models/apartment';
import { PictureHttpService } from 'src/app/core/services/picture/http/picture-http.service';

@Component({
  selector: 'app-apartment-thumb',
  templateUrl: './apartment-thumb.component.html',
  styleUrls: ['./apartment-thumb.component.scss']
})
export class ApartmentThumbComponent implements OnInit {

  @Input() apartment: Apartment;
  avg: number[] = [];
  constructor(private phService: PictureHttpService) { }

  ngOnInit() {
    this.avg = this.getAvg();
    // this.getImgThumb();
  }

  // getImgThumb() {
  //   this.phService.getPicture(this.apartment.ImgThumb)
  //     .subscribe((file) => {
  //       this.img = file;
  //     });

  //   // const apiUrl = 'http://localhost:50649/api/Pictures/' + this.apartment.ID_Ap + '/';
  //   // return this.apartment.ImgThumb.slice(apiUrl.length);
  // }

  calculateAvg(): number {
    let rate = this.apartment.LocationRating + this.apartment.StandardRating + this.apartment.PriceRating + this.apartment.OwnerRating;
    rate = rate / 4;
    return Math.round(rate);
  }

  getAvg(): number[] {
    const temp: number[] = [];
    let i: number;
    for (i = 0; i < this.calculateAvg(); i++) {
      temp.push(i);
    }
    return temp;
  }
}
