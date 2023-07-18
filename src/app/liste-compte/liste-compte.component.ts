import { Component } from '@angular/core';
import { ListeCompte } from '../models/liste-compte';
import { BanqueService } from '../services/banque.service';

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


  constructor(private banqueService: BanqueService) { }

  ngOnInit(): void {
    this.lesComptes();
  }

  lesComptes(): void {
    this.banqueService.getComptes(1).subscribe({
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
  
    this.banqueService.findByLibelle(2, this.libelle).subscribe({
      next: (data) => {
        this.listeCompte = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
}