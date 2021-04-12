import { Injectable, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilesService {
  constructor(private http:HttpClient) { }
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
  uploadFile(name:string,description:string,file:any):Observable<any> {
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("file", file,file.name);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("email",  localStorage.getItem('email')|| "");
    // Make http post request over api
    // with formData as req
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    
      
    return this.http.post(environment.apiUrl+"/newFile", formData,httpOptions)
  }
  downloadFile(fileId:string){
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("id", fileId);
    formData.append("email",  localStorage.getItem('email')|| "");
    // Make http post request over api
    // with formData as req
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    return this.http.post(environment.apiUrl+"/file", formData,httpOptions)
  }
}
