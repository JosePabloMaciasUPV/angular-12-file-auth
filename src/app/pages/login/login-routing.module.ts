import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginTemplateComponent} from '../../components/login-template/login-template.component';
import {RegisterTemplateComponent} from '../../components/register-template/register-template.component';
const routes: Routes = [
  {path:'',
  component:LoginTemplateComponent},
  {path:'registrarse',
  component:RegisterTemplateComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
 