import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarSaldoPage } from './consultar-saldo.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarSaldoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarSaldoPageRoutingModule {}
