import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }
  getIsLoged(){return this.isLoged;}
  login(email:string,password:string){
    // Create form data
    const formData = new FormData(); 
    // Store form name as "file" with file data
    formData.append("email", email);
    formData.append("password", password);
    return this.http.post(environment.apiUrl+"/login",formData);
  }
  logout(){}
  register(name:string,email:string,password:string){
    // Create form data
    const formData = new FormData(); 
    // Store form name as "file" with file data
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    return this.http.post(environment.apiUrl+"/register",formData);
  }
}
