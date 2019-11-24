/// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, ViewChild, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() whichSearch: string;
  @Input() label: string;
  @Input() module: string;
  @ViewChild('searchGoogle', { static: true }) public searchElementGoogle: ElementRef;
  @ViewChild('searchDefault', { static: false }) searchElementDefault: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.whichSearch === 'google') {
      this.mapsAPILoader.load().then(() => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementGoogle.nativeElement, { types: ['address'] });

        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      });
    } else if (this.whichSearch === 'default') {

    }
  }

  clearSearch() {
    this.searchElementDefault.nativeElement.value = '';
  }

  onEnter() {
    const inputValue = this.searchElementDefault.nativeElement.value;
    if (inputValue.includes(',')) {
      const street = inputValue.split(',')[0].trim();
      const city = inputValue.split(',')[1].trim();
      this.router.navigate([this.module], { queryParams: { street, city } });
    } else {
      const city = inputValue.trim();
      this.router.navigate([this.module], { queryParams: { city } });
    }

  }
}
