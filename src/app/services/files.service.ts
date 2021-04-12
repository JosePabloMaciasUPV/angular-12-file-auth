import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http:HttpClient) { }
  getFile(){
    return this.http.get(environment.apiUrl+"/file");
  }
  // Returns an observable
  uploadFile(name:string,description:string,file:any):Observable<any> {
    // Create form data
    const formData = new FormData(); 
    // Store form name as "file" with file data
    formData.append("file", file);
    formData.append("name", name);
    formData.append("description", description);
    // Make http post request over api
    // with formData as req
    return this.http.post(environment.apiUrl, formData)
  }
}
