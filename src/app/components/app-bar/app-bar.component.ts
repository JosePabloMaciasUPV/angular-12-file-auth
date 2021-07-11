import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  isLoged:boolean=false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.handshake();
    this.auth.getIsLoged().subscribe(status=>{this.isLoged=status});
  }
  signOut(){
    this.auth.logout();
  }
  signOutAllSesion(){
    this.auth.removeSesions();
  }
}
