import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-template',
  templateUrl: './login-template.component.html',
  styleUrls: ['./login-template.component.scss']
})
export class LoginTemplateComponent implements OnInit {

  constructor(private authService:AuthService) { }
  login = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  submit(){
    this.authService.login(
      this.login.value.email,
      this.login.value.password,
    );
  }

}
