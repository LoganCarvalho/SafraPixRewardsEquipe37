import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuInformacoesPage } from './menu-informacoes.page';

const routes: Routes = [
  {
    path: '',
    component: MenuInformacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuInformacoesPageRoutingModule {}
