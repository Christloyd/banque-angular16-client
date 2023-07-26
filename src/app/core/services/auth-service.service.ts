import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  isUserLogged: boolean = false;

  logout() {
    // Méthode pour déconnecter l'utilisateur
    sessionStorage.clear();
    // Effacer les informations de connexion de la session si nécessaire
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLoggedIn') === 'true';
  }

}