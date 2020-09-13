import { ExtratoService } from './../extrato.service';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public navCtrl: NavController, private extrato: ExtratoService) {

  }

  navegarPara(){
    this.navCtrl.navigateForward('consultar-saldo');
  }

  navegarInformacoes(){
    this.navCtrl.navigateForward('menu-informacoes');
  }

  navegarExtrato(){
    this.navCtrl.navigateForward('extrato');
  }

}
