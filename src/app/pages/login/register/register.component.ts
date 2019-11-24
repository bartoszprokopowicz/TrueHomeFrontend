import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { Register } from 'src/app/models/register';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Register;
  repeatedPassword: string;

  constructor(private userService: UserHttpService, private router: Router) { }

  ngOnInit() {
    this.model = {};
    console.log(this.userService.Auth);
  }

  async onRegister() {
    if (this.repeatedPassword === this.model.password) {
      const response = await this.userService.register(this.model);
      console.log(response);
      this.router.navigate(['/login']);
    } else {
      console.log('spadaj');
    }
  }

}
