import { Component } from '@angular/core';
import { ListeCompte } from 'src/app/core/models/liste-compte';
import { Virement } from 'src/app/core/models/virement';
import { BanqueService } from 'src/app/core/services/banque.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent {
  selectedCompteControl = new FormControl();
  listeCompte?: ListeCompte[];
  currentCompte : ListeCompte = {
    libelle: '',
    solde: 0,
    decouvert: 0,
    taux : 0
  };

  currentIndex = -1;
  libelle = '';

  compteSource! : number;
  compteDest! : number;
  montantVirement! : number ;
  virement : Virement[] = [];

  constructor (private banqueService : BanqueService, private sharedService : SharedService) {}

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



  getLastOperation(): void {

    const data = {
      unUtilisateurId: sessionStorage.getItem('id'),
      unCompteIdSrc: this.compteSource,
      unCompteIdDst: this.compteDest,
      unMontant: this.montantVirement,
    }

    this.banqueService.getVirement(data).subscribe({
      next : (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    })
  }


}
