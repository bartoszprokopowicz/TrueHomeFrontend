import { Component, OnInit, Input } from '@angular/core';
import { Renting } from 'src/app/models/renting';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-renting-view',
  templateUrl: './renting-view.component.html',
  styleUrls: ['./renting-view.component.scss']
})
export class RentingViewComponent implements OnInit {

  @Input() renting: Renting;
  @Input() rentedApartment: Apartment;
  constructor() { }

  ngOnInit() {
    console.log(this.renting);
  }

}
