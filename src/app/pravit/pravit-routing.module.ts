import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PravitPage } from './pravit.page';

const routes: Routes = [
  {
    path: '',
    component: PravitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PravitPageRoutingModule {}
