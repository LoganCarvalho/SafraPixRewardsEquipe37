import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'consultar-saldo',
    loadChildren: () => import('./consultar-saldo/consultar-saldo.module').then( m => m.ConsultarSaldoPageModule)
  },
  {
    path: 'menu-informacoes',
    loadChildren: () => import('./menu-informacoes/menu-informacoes.module').then( m => m.MenuInformacoesPageModule)
  },
  {
    path: 'como-usar-cashback',
    loadChildren: () => import('./como-usar-cashback/como-usar-cashback.module').then( m => m.ComoUsarCashbackPageModule)
  },
  {
    path: 'extrato',
    loadChildren: () => import('./extrato/extrato.module').then( m => m.ExtratoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
