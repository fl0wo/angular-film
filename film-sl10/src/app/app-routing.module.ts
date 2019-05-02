import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import {ProdottoListComponent} from './prodotto-list/prodotto-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: 'prodotto/:id', component: ProdottoComponent},
  {path: 'prodotto', component: ProdottoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
