import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListeCompte } from 'src/app/core/models/liste-compte';
import { BanqueService } from 'src/app/core/services/banque.service';
import { SharedService } from 'src/app/core/services/shared.service';


@Component({
  selector: 'app-liste-compte',
  templateUrl: './liste-compte.component.html',
  styleUrls: ['./liste-compte.component.css']
})
export class ListeCompteComponent {

  listeCompte?: ListeCompte[];
  currentCompte : ListeCompte = {
    libelle: '',
    solde: 0,
    decouvert: 0,
    taux : 0
  };

  currentIndex = -1;
  libelle = '';
  id : any ;

  constructor(private banqueService: BanqueService, private sharedService : SharedService,  private router: Router) { }

  ngOnInit(): void {
    this.sharedService.refreshList$.subscribe(() => {
      this.lesComptes(); // Appelle la fonction lesComptes() lorsque l'événement connect de login.component.ts grace à la fonction refreshList() de shared.service
    });
  }

  lesComptes(): void {
    this.banqueService.getComptes(this.sharedService.response).subscribe({
      next: (data) => {
        this.listeCompte = data;
        console.log(data);
      },
    error: (e) => console.error(e)
    });
  }

  refreshList() : void {
    this.lesComptes();
    this.currentCompte = {
      libelle: '',
      solde: 0,
      decouvert: 0,
      taux : 0
    };
    this.currentIndex = -1;
  }

  setActiveCompte(compte: ListeCompte, index: number): void {
    this.currentCompte = compte;
    this.currentIndex = index;
  }

  searchLabelle(): void {
    this.currentCompte = {
      libelle: '',
      solde: 0,
      decouvert: 0,
      taux : 0
    };
    this.currentIndex = -1;
  
    this.banqueService.findByLibelle(this.sharedService.response, this.libelle).subscribe({
      next: (data) => {
        this.listeCompte = data;
        console.log(data);
        this.id = this.sharedService.response
      },
      error: (e) => console.error(e)
    });
  }

  goVirement(): void {
    this.router.navigate([`virement/${this.id}`]);
  }
}