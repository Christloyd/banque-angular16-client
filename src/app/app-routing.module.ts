import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListeCompteComponent } from './pages/liste-compte/liste-compte.component';
import { DetailCompteComponent } from './pages/detail-compte/detail-compte.component';
import { VirementComponent } from './pages/virement/virement.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
  { path : 'virement/:id', component: VirementComponent},
  { path: 'detail-compte/:id', component: DetailCompteComponent},
  { path : 'liste-compte/:id', component: ListeCompteComponent},
  { path : 'login', component: LoginComponent},
  { path : 'accueil', component: AccueilComponent},
  { path : '', component: AccueilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
