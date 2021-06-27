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
    return this.http.get(environment.apiUrl+"/files");
  }
  // Returns an observable
  uploadFile(name:string,description:string,file:any):Observable<any> {
    // Create form data
    const formData = new FormData(); 
    
    // Store form name as "file" with file data
    formData.append("file", file,file.name);
    formData.append("name", name);
    formData.append("description", description);
    // Make http post request over api
    // with formData as req
    const httpOptions = {
      headers: new HttpHeaders({
        
      })
    };
    
      
    return this.http.post(environment.apiUrl+"/files", formData,httpOptions)
  }
}
