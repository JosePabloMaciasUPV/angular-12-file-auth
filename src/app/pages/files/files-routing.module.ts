import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingFilesComponent} from '../../components/landing-files/landing-files.component';
import {AddNewFileComponent} from '../../components/add-new-file/add-new-file.component';
import {SharedWithMeFileComponent} from '../../components/shared-with-me-file/shared-with-me-file.component';
const routes: Routes = [
  {path:'',
  component:LandingFilesComponent},
  {path:'new',
  component:AddNewFileComponent},
  {path:'sharedToMe',
  component:SharedWithMeFileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilesRoutingModule { }
