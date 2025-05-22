import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstrEstimulacionPage } from './estr-estimulacion.page';

const routes: Routes = [
  {
    path: '',
    component: EstrEstimulacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstrEstimulacionPageRoutingModule {}
