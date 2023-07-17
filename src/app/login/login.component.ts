import { Component } from '@angular/core';
import { Login } from '../models/login';
import { BanqueService } from '../services/banque.service';

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

  constructor(private banqueService : BanqueService) {}

  getlogin(): void {
    const data = {
      unLogin: this.login.unLogin,
      unMdp: this.login.unMdp
    };

    this.banqueService.connect(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    });

  }
}
