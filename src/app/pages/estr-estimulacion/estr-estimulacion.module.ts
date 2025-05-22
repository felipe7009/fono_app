import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrEstimulacionPageRoutingModule } from './estr-estimulacion-routing.module';

import { EstrEstimulacionPage } from './estr-estimulacion.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrEstimulacionPageRoutingModule,
    AngularFireStorageModule
  ],
  declarations: [EstrEstimulacionPage]
})
export class EstrEstimulacionPageModule {}
