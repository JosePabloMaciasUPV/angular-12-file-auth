import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginTemplateComponent } from '../../components/login-template/login-template.component';
import { RegisterTemplateComponent } from '../../components/register-template/register-template.component';


@NgModule({
  declarations: [
    LoginTemplateComponent,
    RegisterTemplateComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
