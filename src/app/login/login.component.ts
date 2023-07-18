import { Component } from '@angular/core';
import { Login } from '../models/login';
import { BanqueService } from '../services/banque.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = {
    unLogin: '',
    unMdp: ''
  };

  constructor(private banqueService : BanqueService, private sharedService : SharedService ) {}

  getlogin(): void {
    const data = {
      unLogin: this.login.unLogin,
      unMdp: this.login.unMdp
    };

    this.banqueService.connect(data).subscribe({
      next: (res) => {
        this.sharedService.response = res; // Stock la réponse res dans le service partagé
        console.log(res);
        this.sharedService.refreshList(); // Appelle la fonction refreshList() du service partagé
      },
      error: (e) => console.error(e)
    });
    
  }

}
