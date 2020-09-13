import { UsoCashbackService } from './../uso-cashback.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-como-usar-cashback',
  templateUrl: './como-usar-cashback.page.html',
  styleUrls: ['./como-usar-cashback.page.scss'],
})
export class ComoUsarCashbackPage implements OnInit {
  public informacoes :any;

  constructor(private usoCashback: UsoCashbackService) { }

  ngOnInit() {

    this.usoCashback.obterInfoCashbak().subscribe(data =>{
      this.informacoes = data;
    });
  }



}
