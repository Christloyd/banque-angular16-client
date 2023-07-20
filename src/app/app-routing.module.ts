import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListeCompteComponent } from './pages/liste-compte/liste-compte.component';
import { DetailCompteComponent } from './pages/detail-compte/detail-compte.component';

const routes: Routes = [
  { path: 'detail-compte', component: DetailCompteComponent},
  { path : 'liste-compte/:id', component: ListeCompteComponent},
  { path : '', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
