import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient,private router: Router,) { }
  getIsLoged(){return this.isLoged;}
  login(email:string,password:string){
    let body={
      "email": email,
      "password": password
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.apiUrl+"/login",body,httpOptions).subscribe(
      (response: any) => {
        this.setToken(response.token);
        this.isLoged.next(true);
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert(error);
      }
    );
  }
  logout(){this.clear()}
  register(name:string,email:string,password:string){
    let body={
      "username":name,
      "email": email,
      "password": password
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(environment.apiUrl+"/register",body,httpOptions);
  }
  setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  getToken(){
    return localStorage.getItem('jwtToken');
  }
  clear() {
    localStorage.clear();
  }
  handshake(){
    this.http.get(environment.apiUrl+"/handshake").subscribe(
      (response: any) => {
        this.setToken(response.token);
        this.handshake();
      },
      (error) => {
        alert("La sesión caducó vuelve a iniciar sesion");
        this.logout();
        this.router.navigate(['/login']);
      }
    );
  }
}
