import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsoCashbackService {

  private urlMockCashback = 'https://demo9697815.mockable.io/usosCashback';

  constructor(public http: HttpClient, public clientModule: HttpClientModule) { }

  obterInfoCashbak(){
    return this.http.get(this.urlMockCashback);
  }
}
