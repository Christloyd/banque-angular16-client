import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListeCompteComponent } from './liste-compte/liste-compte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailCompteComponent } from './detail-compte/detail-compte.component';

import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';

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
