import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaterialDescargablePageRoutingModule } from './material-descargable-routing.module';

import { MaterialDescargablePage } from './material-descargable.page';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialDescargablePageRoutingModule,
    AngularFireStorageModule,
    HttpClientModule
  ],
  declarations: [MaterialDescargablePage]
})
export class MaterialDescargablePageModule {}
