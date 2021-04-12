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
  login(credentials:any){
    return this.http.post(environment.apiUrl,credentials);
  }
  logout(){}
}
