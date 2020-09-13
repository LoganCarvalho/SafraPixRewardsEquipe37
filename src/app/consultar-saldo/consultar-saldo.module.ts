import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarSaldoPageRoutingModule } from './consultar-saldo-routing.module';

import { ConsultarSaldoPage } from './consultar-saldo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarSaldoPageRoutingModule
  ],
  declarations: [ConsultarSaldoPage]
})
export class ConsultarSaldoPageModule {}
