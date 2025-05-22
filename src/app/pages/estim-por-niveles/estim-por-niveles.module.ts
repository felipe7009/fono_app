import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstimPorNivelesPageRoutingModule } from './estim-por-niveles-routing.module';

import { EstimPorNivelesPage } from './estim-por-niveles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstimPorNivelesPageRoutingModule
  ],
  declarations: [EstimPorNivelesPage]
})
export class EstimPorNivelesPageModule {}
