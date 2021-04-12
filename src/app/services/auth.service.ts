import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
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
        this.setToken(response.token,email);
        this.isLoged.next(true);
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert(error);
      }
    );
  }
  logout(){
    let body={
      "email": localStorage.getItem('email'),
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(environment.apiUrl+"/logout",body,httpOptions).subscribe(
      (response: any) => {
        this.clear();
        this.isLoged.next(false);
        this.router.navigate(['/']);
      },
      (error) => {
        alert("La sesión caducó vuelve a iniciar sesion");
        this.isLoged.next(false);
        //this.logout();
        this.router.navigate(['/login']);
      }
    );
    
  }
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
    return this.http.post(environment.apiUrl+"/register",body,httpOptions).subscribe(
      (response: any) => {
        this.setToken(response.token,email);
        this.isLoged.next(true);
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert(error);
      }
    );
  }
  setToken(jwtToken: string,email:string) {
    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('email', email);
  }
  getToken(){
    return localStorage.getItem('jwtToken');
  }
  clear() {
    localStorage.clear();
  }
  handshake(){
    let body={
      "email": localStorage.getItem('email'),
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(environment.apiUrl+"/handshake",body,httpOptions).subscribe(
      (response: any) => {
        this.isLoged.next(true);
        this.router.navigate(['/landing']);
      },
      (error) => {
        alert("La sesión caducó vuelve a iniciar sesion");
        this.logout();
        this.router.navigate(['/login']);
      }
    );
  }
}
