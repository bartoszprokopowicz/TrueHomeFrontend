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

  ngOnInit() {
    this.userService.getDetails().then((data) => {
      this.userData = data;
    });
  }

}
