import { Component } from '@angular/core';

@Component({
  selector: 'app-detail-compte',
  templateUrl: './detail-compte.component.html',
  styleUrls: ['./detail-compte.component.css'],
})
export class DetailCompteComponent {
  startDate?: Date;
  endDate?: Date;
  isChecked: boolean = false;

  onCheckboxChange() {
    console.log('La case à cocher a été modifiée. Nouvelle valeur :', this.isChecked);
  }

  onDateChange() {
    // Les valeurs de startDate et endDate sont mises à jour ici
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
  }

}
