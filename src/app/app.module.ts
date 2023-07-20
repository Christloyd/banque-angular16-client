import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListeCompteComponent } from './pages/liste-compte/liste-compte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCompteComponent } from './pages/detail-compte/detail-compte.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';


import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListeCompteComponent,
    DetailCompteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  
}
