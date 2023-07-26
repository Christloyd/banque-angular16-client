import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './core/services/shared.service';
import { AuthServiceService } from './core/services/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Banque ASC';
  isUserLogged = false;

  constructor(private router : Router) { } 

}


