import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { UserData } from 'src/app/models/user-data';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {

  constructor(private userService: UserHttpService) { }

  userData: UserData;
  isLoading: boolean;

  ngOnInit() {
    this.isLoading = true;
    this.userService.getDetails().then((data) => {
      this.userData = data;
      this.isLoading = false;
      console.log(this.userData);
    });
  }

}
