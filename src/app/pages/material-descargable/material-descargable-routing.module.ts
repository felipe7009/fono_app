import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialDescargablePage } from './material-descargable.page';

const routes: Routes = [
  {
    path: '',
    component: MaterialDescargablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialDescargablePageRoutingModule {}
