import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-template',
  templateUrl: './register-template.component.html',
  styleUrls: ['./register-template.component.scss']
})
export class RegisterTemplateComponent implements OnInit {

  constructor(private authService:AuthService) { }
  register = new FormGroup({
    name: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  ngOnInit(): void {
  }
  submit(){
    this.authService.register(
      this.register.value.name,
      this.register.value.email,
      this.register.value.password,
    )
  }
}
