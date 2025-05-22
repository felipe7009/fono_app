import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimPorNivelesPage } from './estim-por-niveles.page';

const routes: Routes = [
  {
    path: '',
    component: EstimPorNivelesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimPorNivelesPageRoutingModule {}
