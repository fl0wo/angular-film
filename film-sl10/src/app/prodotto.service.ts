import { Injectable } from '@angular/core';
import {ProdottoModel} from './prodotto-model';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {error} from '@angular/compiler/src/util';
import {headersToString} from 'selenium-webdriver/http';



@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private prodotti: Array<ProdottoModel>;
  private categorie: Array<any>;

  private local_url:string = "http://127.0.0.1:8000";

  constructor(private httpClient: HttpClient) {
    this.prodotti = new Array<ProdottoModel>();
    this.categorie = new Array<any>();

    httpClient.get(this.local_url + "/films/?format=json").subscribe((films : Array<Object> ) => {
      films.forEach((film => {
            this.prodotti.push(new ProdottoModel(film));
        }));
      }
    );

    this.httpClient.get(this.local_url + "/categories/?format=json").subscribe((categorie : Array<any> ) => {
      categorie.forEach((categoria => {
            console.log(categoria);
            this.categorie.push(categoria);
        }));
      }
    );

  }
  getProdotti(): Array<ProdottoModel> {
    return this.prodotti;
  }
  getCategories(){
    return this.categorie;
  }
  alertTest(){
    alert('ciao');
  }
}