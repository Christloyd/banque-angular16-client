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

  urlIdCompte = -1;
  currentIndex = -1;
  libelle = '';
  id : any ;

  idUrl : any;

  constructor(private banqueService: BanqueService, private sharedService : SharedService,  private router: Router) { }

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


    let idString = sessionStorage.getItem('id');
    let idNumber: number = -1; // Initialisation avec une valeur par défaut

    if (idString !== null) {
      idNumber = parseInt(idString);
    }
  
    this.banqueService.findByLibelle(idNumber, this.libelle).subscribe({

      
      next: (data) => {
        this.listeCompte = data;
        console.log(data);
        this.id = sessionStorage.getItem('id')
      },
      error: (e) => console.error(e)
    });
  }

  goVirement(): void {
    this.router.navigate([`virement/${sessionStorage.getItem('id')}`]);
  }

  goOperation(param1 : any): void {
    this.router.navigate([`detail-compte/${param1}`]);
  }
}