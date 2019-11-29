import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/core/services/user/http/user-http.service';
import { Register } from 'src/app/models/register';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: Register;
  repeatedPassword: string;
  registerForm: FormGroup;

  constructor(private userService: UserHttpService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.model = {};
    this.registerForm = this.formBuilder.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      confirmPassword: ['', RxwebValidators.compare({fieldName: 'password' })],
      email: ['', Validators.email],
      name: ['', Validators.required],
      surname: ['', Validators.required]
    });
  }

  async onRegister() {
    if (this.registerForm.invalid) {
      console.log('ZA MAŁO CZEGOŚ');
      return;
    }

    this.assignToModel();
    
    const response = await this.userService.register(this.model);
    console.log(response);
    this.router.navigate(['/login']);
  }

  private assignToModel() {
    this.model.login = this.registerForm.value.login;
    this.model.password = this.registerForm.value.password;
    this.model.email = this.registerForm.value.email;
    this.model.name = this.registerForm.value.name;
    this.model.surname = this.registerForm.value.surname;
  }

}
