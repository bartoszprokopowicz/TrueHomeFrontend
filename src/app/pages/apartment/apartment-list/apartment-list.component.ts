import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApartmentList } from 'src/app/models/apartmentList';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit, OnDestroy {

  constructor(private apService: ApartmentHttpService, private route: ActivatedRoute) { }

  apartments: ApartmentList;
  limitOffset = { limit: 10, offset: 0 };
  filteredApartments: Apartment[] = [];
  street: string;
  city: string;

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  ngOnInit() {

    this.apartments = new ApartmentList();
    this.route.queryParams
      .subscribe((params) => {
        this.street = params.street;
        this.city = params.city;
      });

    this.getApartmentList();
  }

  getApartmentList() {
    this.apService.getApartmentList(this.limitOffset)
      .pipe(takeUntil(this.destroy$))
      .subscribe((apartmentList: ApartmentList) => {
        // tslint:disable-next-line: prefer-const
        this.apartments = apartmentList;
      });
  }

  filteredApartmentList(): Apartment[] {
    const tempApartments: Apartment[] = [];
    if (this.apartments.apartmentsList !== undefined) {
      if (this.city === undefined) {
        return this.apartments.apartmentsList;
      } else if (this.city !== undefined) {
        this.apartments.apartmentsList.forEach(ap => {
          if (ap.City === this.city) {
            tempApartments.push(ap);
          }
        });
        return tempApartments;
      }
    }
    return tempApartments;
  }

  onPaginateChange(event) {
    this.limitOffset.limit = event.pageSize;
    this.limitOffset.offset = event.pageIndex * event.pageSize;
    this.getApartmentList();
  }

  getSize() {
    if (this.filteredApartmentList().length !== undefined) {
      return this.filteredApartmentList().length;
    }
    return 0;
  }
}
