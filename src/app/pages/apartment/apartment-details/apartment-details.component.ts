import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Apartment } from 'src/app/models/apartment';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit, OnDestroy {

  constructor(private apService: ApartmentHttpService, private route: ActivatedRoute, private userService: UserHttpService) { }

  apartment: Apartment;
  destroy$: Subject<boolean> = new Subject<boolean>();
  rating: number;
  currentUserId: string;
  isLoading: boolean;
  price: number;

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.isLoading = true;
    this.price = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.getApartment(params.id);
      });
    this.userService.getCurrentUser()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.currentUserId = data.id;
      });
  }

  getApartment(id: number) {
    this.apService.getApartment(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((apartment: Apartment) => {
        // tslint:disable-next-line: prefer-const
        this.apartment = apartment;
        this.rating = this.calculateAvg();
        this.isLoading = false;
        //console.log(this.apartment);
      });
  }

  showRent() {
    if (!this.isLoading) {
      return this.apartment.IDUser !== this.currentUserId;
    }
  }
  
  showEdit() {
    if (!this.isLoading) {
      return this.apartment.IDUser === this.currentUserId;
    }
  }

  calculateAvg(): number {
    if (this.apartment) {
      let rate = this.apartment.LocationRating + this.apartment.StandardRating + this.apartment.PriceRating + this.apartment.OwnerRating;
      rate = rate / 4;
      return Math.round(rate);
    }
    return 0;
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
