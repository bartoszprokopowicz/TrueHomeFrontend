import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { Login } from 'src/app/models/login';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserHttpService, private router: Router, private formBuilder: FormBuilder) { }

  model: Login;
  validLogin: boolean;
  loginForm: FormGroup;

  ngOnInit() {
    this.model = {};
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    const response = await this.userService.login(this.model);
    this.validLogin = response;
    if (this.validLogin) {
      this.router.navigate(['/']);
    } else {

    }
  }
}
