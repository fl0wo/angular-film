import { Component, OnInit } from '@angular/core';
import {ProdottoService} from '../prodotto.service';

@Component({
  selector: 'app-prodotto-list',
  templateUrl: './prodotto-list.component.html',
  styleUrls: ['./prodotto-list.component.css']
})
export class ProdottoListComponent implements OnInit {

  constructor(private prodottoService: ProdottoService) { }

  cerca = "";

  ngOnInit() {
  }

}
