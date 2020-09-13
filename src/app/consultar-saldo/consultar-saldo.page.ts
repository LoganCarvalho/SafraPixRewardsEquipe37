import { Cliente } from './../../interfaces/Cliente';
import { SaldoService } from './../saldo.service';
import { Component, OnInit } from '@angular/core';
import {NavController, LoadingController, ToastController, AlertController } from '@ionic/angular';



@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.page.html',
  styleUrls: ['./consultar-saldo.page.scss'],
})
export class ConsultarSaldoPage implements OnInit {

  public clientes :any;

  cliente: Cliente;
  constructor(private saldo: SaldoService, public alertCtrl: AlertController,
    public navCtrl: NavController, public loadingCtrl: LoadingController,
    private toast: ToastController) { }

  ngOnInit() {
    // this.saldo.consultarSaldo().subscribe(data => {
    //   console.log('dados da api consulta saldo Safra');
    //   console.log(data);
    // });
    this.cliente = {
      nome : 'João',
      idade : 23,
      localNascimento : 'SP',
    };
    this.saldo.obterClientesMock().subscribe(data =>{
      this.clientes = data;
    });

  }

}
