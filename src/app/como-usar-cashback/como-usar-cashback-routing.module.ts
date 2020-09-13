import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComoUsarCashbackPage } from './como-usar-cashback.page';

const routes: Routes = [
  {
    path: '',
    component: ComoUsarCashbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComoUsarCashbackPageRoutingModule {}
