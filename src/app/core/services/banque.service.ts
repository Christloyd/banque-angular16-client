import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { ListeCompte } from '../models/liste-compte';
import { Virement } from '../models/virement';

const baseUrl = 'http://localhost:8080/api/service-banque'

@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  id? : any;

  constructor(private http: HttpClient) {
  }

  connect(data: Login): Observable<any> {
    return this.http.post(`${baseUrl}/authentifier`, data);
  }

  getComptes(param1: number): Observable<ListeCompte[]> {
    return this.http.post<ListeCompte[]>(`${baseUrl}/selectCompte?unUtilisateurId=${param1}`, null);
  }

  findByLibelle(param1: number, libelle : any) : Observable<ListeCompte[]>{
    return this.http.post<ListeCompte[]>(`${baseUrl}/selectCompteEtLibelle?unUtilisateurId=${param1}&unLibelle=${libelle}`, null);
  }

  getVirement(data : Virement): Observable<any> {
    return this.http.post(`${baseUrl}/virement` , data);
  }

  getOperationByIdCompte(unUtilisateurId : number, unCompteId : number):Observable<any>{
    const data = { 
      unUtilisateurId: unUtilisateurId, 
      unCompteId: unCompteId 
    }; 
    return this.http.post(`${baseUrl}/virement` , data);
  }

  dataSave(){
    sessionStorage.setItem('id', this.id );
  }

  get(){
    return sessionStorage.getItem('id');
  }

  dataRemove(){
    sessionStorage.removeItem("id");
  }

  deleteAll(){
    sessionStorage.clear();
  }

}
