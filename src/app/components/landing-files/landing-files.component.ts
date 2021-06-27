import { Component, OnInit } from '@angular/core';
import {FilesService} from '../../services/files.service';

@Component({
  selector: 'app-landing-files',
  templateUrl: './landing-files.component.html',
  styleUrls: ['./landing-files.component.scss']
})
export class LandingFilesComponent implements OnInit {

  constructor(private fileService:FilesService) { }

  ngOnInit(): void {
    this.getFiles();
  }
  getFiles(){
    this.fileService.getFiles().subscribe(res=>{console.log(res)});
  }
}
