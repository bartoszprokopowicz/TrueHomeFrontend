/// <reference types="@types/googlemaps" />
import { Component, OnInit, ElementRef, ViewChild, NgZone, Input } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input() whichSearch: string;
  @ViewChild('searchGoogle', { static: true }) public searchElementGoogle: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private router: Router) { }

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

  onEnter(event) {
    const inputValue = event.target.value;
    this.router.navigate(['apartments', { street: 'lol' }]);
  }
}
