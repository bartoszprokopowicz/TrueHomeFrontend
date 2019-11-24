import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit, OnDestroy {

  constructor(private apService: ApartmentHttpService, private route: ActivatedRoute) { }

  apartment: Apartment;
  destroy$: Subject<boolean> = new Subject<boolean>();
  rating: number;

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.getApartment(params.id);
    });
  }

  getApartment(id: number) {
    this.apService.getApartment(id)
    .pipe(takeUntil(this.destroy$))
    .subscribe((apartment: Apartment) => {
      // tslint:disable-next-line: prefer-const
      this.apartment = apartment;
      this.rating = this.calculateAvg();
    });
  }

  calculateAvg(): number {
    let rate = this.apartment.LocationRating + this.apartment.StandardRating + this.apartment.PriceRating + this.apartment.OwnerRating;
    rate = rate / 4;
    return Math.round(rate);
  }

  getAvg(): number[] {
    const temp: number[] = [];
    let i: number;
    for ( i = 0; i < this.calculateAvg(); i++) {
      temp.push(i);
    }
    return temp;
  }

}
