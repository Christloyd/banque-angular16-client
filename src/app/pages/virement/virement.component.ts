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
  currentCompte: ListeCompte = {
    libelle: '',
    solde: 0,
    decouvert: 0,
    taux: 0
  };

  currentIndex = -1;
  libelle = '';

  compteSource!: number;
  compteDest!: number;
  montantVirement!: number;
  virement: Virement[] = [];

  constructor(private banqueService: BanqueService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.lesComptes();
  }


  lesComptes(): void {

    let idString = sessionStorage.getItem('id');
    let idNumber: number = -1; // Initialisation avec une valeur par défaut

    if (idString !== null) {
      idNumber = parseInt(idString);
    }

    this.banqueService.getComptes(idNumber).subscribe({
      next: (data) => {
        console.log(idNumber);
        this.listeCompte = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.lesComptes();
    this.currentCompte = {
      libelle: '',
      solde: 0,
      decouvert: 0,
      taux: 0
    };
    this.currentIndex = -1;
  }

  setActiveCompte(compte: ListeCompte, index: number): void {
    this.currentCompte = compte;
    this.currentIndex = index;
  }



  getLastOperation(): void {

    let idString = sessionStorage.getItem('id');
    let idNumber: number = -1; // Initialisation avec une valeur par défaut

    if (idString !== null) {
      idNumber = parseInt(idString);
    }

    const data = {

      unUtilisateurId: idNumber,
      unCompteIdSrc: this.compteSource,
      unCompteIdDst: this.compteDest,
      unMontant: this.montantVirement,
    }

    this.banqueService.getVirement(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    })
  }


}
