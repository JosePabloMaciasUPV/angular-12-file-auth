import { Injectable, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http:HttpClient,private router: Router) { }
  getFiles(){
    let body={
      "email": localStorage.getItem('email'),
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Array<any>>(environment.apiUrl+"/files",body,httpOptions);
  }
  // Returns an observable
  uploadFile(name:string,description:string,file:any,sharedUsers:Array<string>) {
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("file", file,file.name);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("sharedUsers",JSON.stringify(sharedUsers));
    formData.append("email",  localStorage.getItem('email')|| "");

    // Make http post request over api
    // with formData as req
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    
    this.http.post(environment.apiUrl+"/newFile", formData,httpOptions).subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['/landing']);
    },
    (error) => {
      alert("Ocurrio un error al subir");
      
    });
  }
  downloadFile(fileId:string){
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("key", fileId);
    formData.append("email",  localStorage.getItem('email')|| "");
    // Make http post request over api
    // with formData as req
    const body={key:fileId,email:localStorage.getItem('email')|| ""}
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Disposition": "attachment;"
      }),
      responseType: 'blob' as 'blob'
    };
    
    return this.http.post(environment.apiUrl+"/file", body,httpOptions).subscribe(
      (response: any) => {
      this.downLoadFile(response, "application/pdf");
    },
    (error) => {
      console.log(error);
    }) 
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data]  );//, { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
        alert( 'Please disable your Pop-up blocker and try again.');
    }
}
}
