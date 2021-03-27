import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrayutPage } from './prayut.page';

const routes: Routes = [
  {
    path: '',
    component: PrayutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrayutPageRoutingModule {}
