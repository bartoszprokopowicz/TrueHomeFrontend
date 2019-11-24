import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Register;
  repeatedPassword: string;

  constructor(private userService: UserHttpService) { }

  ngOnInit() {
    this.model = {};
    console.log(this.userService.Auth);
  }

  async onRegister() {
    if (this.repeatedPassword === this.model.password) {
      const response = await this.userService.register(this.model);
      console.log(response);
      console.log('dziala');
    } else {
      console.log('spadaj');
    }
  }

}
