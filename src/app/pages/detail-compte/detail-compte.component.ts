import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueService } from 'src/app/core/services/banque.service';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/core/models/detail';
import { SharedService } from 'src/app/core/services/shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css'],
})
export class DetailCompteComponent {
  detail : Detail[] = [];
  startDate?: any;
  endDate?: any;
  isDebit: boolean = false;
  isCredit: boolean = false;


  url : number = -1;

  private subscription!: Subscription;


  constructor(private banqueService: BanqueService,  private router: Router,private route: ActivatedRoute, private sharedService : SharedService) { }


  onDebit() {
    this.isDebit = !this.isDebit;
    console.log('La case à cocher a été modifiée. Nouvelle valeur :', this.isDebit);
  }

  onCredit() {
    this.isCredit = !this.isCredit;
    console.log('La case à cocher a été modifiée. Nouvelle valeur :', this.isCredit);
  }

  startDateFunc(){
    this.startDate =  this.startDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  endDateFunc(){
    this.startDate =  this.endDate.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
       let x = params.get('id');

       if (x !== null) {
        this.url = parseInt(x) ;
       }
    });




    this.detailCompte();

    this.subscription = this.sharedService.refreshList$.subscribe(() => {
      this.actualiserRecherche();
    });
  }

  detailCompte(): void {
    let idString = sessionStorage.getItem('id');
    let idNumber: number = -1; // Initialisation avec une valeur par défaut

    if (idString !== null) {
      idNumber = parseInt(idString);
    }

    this.banqueService.getAllDetailCompte(idNumber, this.url).subscribe({
      next: (data) => {
        this.detail = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

    actualiserRecherche(): void{

      let idString = sessionStorage.getItem('id');
      let idNumber: number = -1; // Initialisation avec une valeur par défaut

      if (idString !== null) {
        idNumber = parseInt(idString);
      }


      if(this.isCredit && this.isDebit)
      {
        this.detailCompte()
        this.subscription.unsubscribe();
      }
      else if( this.isDebit === true && this.isCredit === false){

        this.banqueService.getDetailCompte(idNumber,this.url,this.startDate,this.endDate,true).subscribe({
          next: (data) => {
            this.detail = data;
          console.log(data);
          this.subscription.unsubscribe();
          },
          error: (e) => console.error(e)
        });
      }
      else if( this.isDebit === false && this.isCredit === true){
        this.banqueService.getDetailCompte(idNumber,this.url,this.startDate,this.endDate,false).subscribe({
          next: (data) => {
            this.detail = data;
          console.log(data);
          this.subscription.unsubscribe();
          },
          error: (e) => console.error(e)
        });
      }
    }
   



  

}
