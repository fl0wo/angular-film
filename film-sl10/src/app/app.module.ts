import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { ProdottoListComponent } from './prodotto-list/prodotto-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import { CercaPipe } from './cerca.pipe';
import { CercaByCategoriaPipe } from './cerca-by-categoria.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent,
    ProdottoComponent,
    ProdottoListComponent,
    CercaPipe,
    CercaByCategoriaPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgImageSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
