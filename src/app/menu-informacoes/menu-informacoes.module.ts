import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuInformacoesPageRoutingModule } from './menu-informacoes-routing.module';

import { MenuInformacoesPage } from './menu-informacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuInformacoesPageRoutingModule
  ],
  declarations: [MenuInformacoesPage]
})
export class MenuInformacoesPageModule {}
