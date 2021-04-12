import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  isLoged:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.isLoged=this.auth.getIsLoged();
  }
   
}
