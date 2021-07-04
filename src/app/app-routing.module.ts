import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth-guard.guard';
import { StopAuthGuard} from './helpers/stop-auth.guard'
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    canActivate:[StopAuthGuard]
  },
  {
    path:'landing',
    loadChildren: () => import('./pages/files/files.module').then(m => m.FilesModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
