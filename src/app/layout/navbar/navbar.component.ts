import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserHttpService) { }

  ngOnInit() {
  }

}
