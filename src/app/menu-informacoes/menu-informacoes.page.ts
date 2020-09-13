import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu-informacoes',
  templateUrl: './menu-informacoes.page.html',
  styleUrls: ['./menu-informacoes.page.scss'],
})
export class MenuInformacoesPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  navUsarCashback(){
    this.navCtrl.navigateForward('como-usar-cashback');
  }

}
