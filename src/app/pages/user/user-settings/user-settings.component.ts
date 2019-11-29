import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { UserData } from 'src/app/models/user-data';
import { Renting } from 'src/app/models/renting';
import { RentingHttpService } from 'src/app/core/services/renting/http/renting-http.service';
import { ApartmentHttpService } from 'src/app/core/services/apartment/http/apartment-http.service';
import { Apartment } from 'src/app/models/apartment';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private userService: UserHttpService, private rentService: RentingHttpService, private apService: ApartmentHttpService) { }

  userData: UserData;
  isLoading: boolean;
  renting: Renting;
  rentedApartment: Apartment;

  ngOnInit() {
    this.isLoading = true;
    this.userService.getDetails().then((data) => {
      this.userData = data;
    });
    this.rentService.getRenting().subscribe((data) => {
      this.renting = data;
      this.apService.getApartment(this.renting.IDAp).subscribe((data2) => {
        this.rentedApartment = data2;
      });
    });
  }
}
