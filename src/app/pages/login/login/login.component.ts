import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { Login } from 'src/app/models/login';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserHttpService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {}

  model: Login;
  validLogin: boolean;
  loginForm: FormGroup;

  ngOnInit() {
    this.model = {};
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required])],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)])
      ]
    });
  }

  async onLogin() {
    if (this.login.invalid) {
      console.log('halko')
      this.showError('Pole logowania jest wymagane');
      return;
    }
    if (this.password.invalid) {
      this.showError('Haslo musi zawierac min. 8 znakow');
      return;
    }
    this.model.login = this.loginForm.value.login;
    this.model.password = this.loginForm.value.password;

    const response = await this.userService.login(this.model);
    this.validLogin = response;
    if (this.validLogin) {
      this.router.navigate(['/']);
    } else {
    }
  }

  private get login() {
    return this.loginForm.get('login');
  }

  private get password() {
    return this.loginForm.get('password');
  }

  showError(msg: string) {
    this.messageService.add({severity: 'error', summary: msg, detail: 'Validation failed'});
  }
}
