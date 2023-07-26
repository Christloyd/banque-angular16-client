import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/core/models/login';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
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

  constructor(private banqueService : BanqueService, private sharedService : SharedService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id); // Vérifiez si vous obtenez la valeur de `id` correctement
    });
  }


  public id : any; 
  getlogin(): void {
    const data = {
      unLogin: this.login.unLogin,
      unMdp: this.login.unMdp
    };
    
    this.banqueService.connect(data).subscribe({
      next: (res) => {
        this.router.navigate([`liste-compte/${res}`]);
        sessionStorage.setItem('id', res );
      },
      error: (e) => console.error(e)
    });
  }
}
