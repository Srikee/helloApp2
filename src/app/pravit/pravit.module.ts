import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PravitPageRoutingModule } from './pravit-routing.module';

import { PravitPage } from './pravit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PravitPageRoutingModule
  ],
  declarations: [PravitPage]
})
export class PravitPageModule {}
