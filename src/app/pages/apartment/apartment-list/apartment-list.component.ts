import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { Apartment } from 'src/app/models/apartment';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ApartmentList } from 'src/app/models/apartmentList';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit, OnDestroy {

  constructor(private apService: ApartmentHttpService) { }
  apartments: ApartmentList;

  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    const limitOffset = { limit: 10, offset: 0 };
    this.apService.getApartmentList(limitOffset)
      .pipe(takeUntil(this.destroy$))
      .subscribe((apartmentList: ApartmentList) => {
        this.apartments = apartmentList;
      });
  }
}
