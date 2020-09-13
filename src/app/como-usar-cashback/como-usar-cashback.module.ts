import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComoUsarCashbackPageRoutingModule } from './como-usar-cashback-routing.module';

import { ComoUsarCashbackPage } from './como-usar-cashback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComoUsarCashbackPageRoutingModule
  ],
  declarations: [ComoUsarCashbackPage]
})
export class ComoUsarCashbackPageModule {}
