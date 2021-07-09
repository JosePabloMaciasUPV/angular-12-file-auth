import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { FilesService} from '../../services/files.service';
@Component({
  selector: 'app-add-new-file',
  templateUrl: './add-new-file.component.html',
  styleUrls: ['./add-new-file.component.scss']
})
export class AddNewFileComponent implements OnInit {
  constructor(private fileService:FilesService) { }
  newFile = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    file: new FormControl('',Validators.required),
    shared: new FormControl('',Validators.email)
  });
  newSharedList:Array<string>=[];
  //Where the file is going to be saved
  file:File | undefined;
  fileName:string="";
  ngOnInit(): void {

  }
  submit(){
    if(this.newFile.value.shared.length>1){
      alert("aun no has terminado de añadir un correo:"+this.newFile.value.shared);
    }
    else{
      this.fileService.uploadFile(
        this.newFile.value.name,
        this.newFile.value.description,
        this.file,
        this.newSharedList
        ).subscribe(res=>{console.log(res)})
    }
    
  }

  onFileSelected(event:any) {
    this.file= event.target.files[0];
    this.fileName=event.target.files[0].name;
}
  deleteShared(index:number){
    this.newSharedList.splice(index, 1);
  }
  onNewShared(){
    if(this.newFile.controls.shared.valid){
      this.newSharedList.push(this.newFile.value.shared);
      this.newFile.controls.shared.setValue("");
    }else{
      alert("inserta un correo valido");
    }
    
  }
}
