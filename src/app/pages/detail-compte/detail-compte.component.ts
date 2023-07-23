import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BanqueService } from 'src/app/core/services/banque.service';
import { ActivatedRoute } from '@angular/router';
import { Detail } from 'src/app/core/models/detail';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css'],
})
export class DetailCompteComponent {
  detail! : Detail;
  startDate?: Date;
  endDate?: Date;
  isChecked: boolean = false;

  url : number = -1;


  constructor(private banqueService: BanqueService,  private router: Router,private route: ActivatedRoute) { }


  onCheckboxChange() {
    console.log('La case à cocher a été modifiée. Nouvelle valeur :', this.isChecked);
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
       let x = params.get('id');

       if (x !== null) {
        this.url = parseInt(x) ;
       }
    });


    this.detailCompte();
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




  onDateChange() {
    // Les valeurs de startDate et endDate sont mises à jour ici
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
  }

}
