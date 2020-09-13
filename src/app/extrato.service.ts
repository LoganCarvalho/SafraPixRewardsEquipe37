import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  private urlMockExtrato = 'http://demo5669578.mockable.io/getBankStatement';
  private urlMockSaldo = 'https://demo9697815.mockable.io/saldoCashback';

  constructor(public http: HttpClient, public clientModule: HttpClientModule) { }

  obterExtratoMock(){
    return this.http.get(this.urlMockExtrato);
  }

  obterSaldoMock(){
    return this.http.get(this.urlMockSaldo);
  }
}
