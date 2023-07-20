import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  response: any;
  
  refreshList$: Subject<void> = new Subject<void>(); // Observable pour rafraîchir la liste
  constructor() { }

  refreshList(): void {
    this.refreshList$.next(); // Émet un événement pour rafraîchir la liste
  }
}
