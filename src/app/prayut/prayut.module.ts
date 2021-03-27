import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrayutPageRoutingModule } from './prayut-routing.module';

import { PrayutPage } from './prayut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrayutPageRoutingModule
  ],
  declarations: [PrayutPage]
})
export class PrayutPageModule {}
