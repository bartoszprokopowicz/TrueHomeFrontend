import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-photo',
  templateUrl: './carousel-photo.component.html',
  styleUrls: ['./carousel-photo.component.scss']
})
export class CarouselPhotoComponent implements OnInit {

  constructor() { }

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input() photos: string[];
  ngOnInit() {
    console.log(this.photos);
    // this.photos = this.images;
  }


}
