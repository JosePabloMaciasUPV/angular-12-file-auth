import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FilesRoutingModule } from './files-routing.module';
import { LandingFilesComponent } from '../../components/landing-files/landing-files.component';
import { AddNewFileComponent } from '../../components/add-new-file/add-new-file.component';
import { SharedWithMeFileComponent } from '../../components/shared-with-me-file/shared-with-me-file.component';


@NgModule({
  declarations: [
    LandingFilesComponent,
    AddNewFileComponent,
    SharedWithMeFileComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FilesModule { }
