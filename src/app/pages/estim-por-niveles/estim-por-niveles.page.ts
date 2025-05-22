import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estim-por-niveles',
  templateUrl: './estim-por-niveles.page.html',
  styleUrls: ['./estim-por-niveles.page.scss'],
})
export class EstimPorNivelesPage implements OnInit {

  showDescubridor = false;
  showComunicador = false;
  showPrimerasPalabras = false;
  showCombinador = false;

  constructor() { }

  ngOnInit() {
  }

}
