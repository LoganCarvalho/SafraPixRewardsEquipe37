import { ExtratoService } from './../extrato.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.page.html',
  styleUrls: ['./extrato.page.scss'],
})
export class ExtratoPage implements OnInit {
  public extratos :any;

  constructor(private extrato: ExtratoService) { }

  ngOnInit() {

    this.extrato.obterExtratoMock().subscribe(data =>{
      this.extratos = data;
    });

  }

}
