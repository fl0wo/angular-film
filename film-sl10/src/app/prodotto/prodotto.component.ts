import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {ProdottoModel} from '../prodotto-model';
import {ProdottoService} from '../prodotto.service';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  private circolare: ProdottoModel;

  constructor(private route: ActivatedRoute, private prodottoService: ProdottoService) {
    this.route.params.subscribe((param: Params) => {
      this.circolare = prodottoService.getProdotti()[param.id];
    });
  }

  ngOnInit() {
  }

}
