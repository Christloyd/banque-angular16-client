import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/models/login';
import { BanqueService } from 'src/app/core/services/banque.service';
import { SharedService } from 'src/app/core/services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  login: Login = {
    unLogin: '',
    unMdp: ''
  };

  constructor(private banqueService : BanqueService, private sharedService : SharedService, private router: Router) {}
  public id : any; 
  getlogin(): void {
    const data = {
      unLogin: this.login.unLogin,
      unMdp: this.login.unMdp
    };
    
    this.banqueService.connect(data).subscribe({
      next: (res) => {
        this.sharedService.response = res; // Stock la réponse res dans le service partagé
        console.log(res);
        this.id = res ;
        this.sharedService.refreshList(); // Appelle la fonction refreshList() du service partagé
      },
      error: (e) => console.error(e)
    });
    
    this.router.navigate([`liste-compte/${this.id}`]);
   
  }

}
