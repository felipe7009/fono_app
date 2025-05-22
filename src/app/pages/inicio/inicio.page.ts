import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private navCtrl: NavController) { }

  navigateToQuizPage() {
    this.navCtrl.navigateForward('/quiz');
  }

  navigateToEstimPorNivelesPage() {
    this.navCtrl.navigateForward('/estim-por-niveles');
  }

  slidesOptions = {
    slidesPerView: 1.5
  }

}
