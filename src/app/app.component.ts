import { Component, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
// import { register } from 'swiper/element/bundle';

// register();
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('menu') menu: IonMenu;

  constructor() {}

  toggleMenu() {
    this.menu.toggle();
  }

  closeMenu() {
    this.menu.close();
  }
}
