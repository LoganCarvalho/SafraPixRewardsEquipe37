import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaldoService {

  private authToken = 'Bearer eyJ4NXQjUzI1NiI6IlNhWkUtSjdJdDBQWFRYNFlCaTBCeXk4WWhPVlJkSzlNNXgzREN3R2ZnbkEiLCJ4NXQiOiJVSWpBeHIyTWlzNk9JdTNMS2NsX3JPSHl3eXMiLCJraWQiOiJTSUdOSU5HX0tFWSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmODkyZmU4OGFiYzQ0M2FjOTM2MmUxMTEyNTA5MjMxMyIsImd0cCI6ImNjIiwidXNlci50ZW5hbnQubmFtZSI6ImlkY3MtOTAyYTk0NGZmNjg1NGM1ZmJlOTQ3NTBlNDhkNjZiZTUiLCJzdWJfbWFwcGluZ2F0dHIiOiJ1c2VyTmFtZSIsInByaW1UZW5hbnQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9pZGVudGl0eS5vcmFjbGVjbG91ZC5jb21cLyIsInRva190eXBlIjoiQVQiLCJjbGllbnRfaWQiOiJmODkyZmU4OGFiYzQ0M2FjOTM2MmUxMTEyNTA5MjMxMyIsImNhX2d1aWQiOiJjYWNjdC1iOThlNGJjZDQ1MDU0YjZlOTc3NzU5OThiNmYzNmYwNiIsImF1ZCI6InVybjpvcGM6cmVzb3VyY2U6c2NvcGU6YWNjb3VudCIsInN1Yl90eXBlIjoiY2xpZW50Iiwic2NvcGUiOiJ1cm46b3BjOnJlc291cmNlOmNvbnN1bWVyOjphbGwiLCJjbGllbnRfdGVuYW50bmFtZSI6ImlkY3MtOTAyYTk0NGZmNjg1NGM1ZmJlOTQ3NTBlNDhkNjZiZTUiLCJleHAiOjE1OTk5MjQyNDksImlhdCI6MTU5OTkyMDY0OSwidGVuYW50X2lzcyI6Imh0dHBzOlwvXC9pZGNzLTkwMmE5NDRmZjY4NTRjNWZiZTk0NzUwZTQ4ZDY2YmU1LmlkZW50aXR5Lm9yYWNsZWNsb3VkLmNvbTo0NDMiLCJjbGllbnRfZ3VpZCI6ImJjMDJhYjIwNzE4ZTQ2N2Y5MTIwNTBhZjE0YTMxNzUyIiwiY2xpZW50X25hbWUiOiJUaW1lIDgiLCJ0ZW5hbnQiOiJpZGNzLTkwMmE5NDRmZjY4NTRjNWZiZTk0NzUwZTQ4ZDY2YmU1IiwianRpIjoiMTFlYWY1MDM5Zjc2ZWU2YjhiNDFmOWEyYjBjNmY1MTEifQ.R4XDiPwSN8m0BUIgH7s0bEsAN0P2mNKp4yGRgu5vyMBcqdoOa8UJWWKk55hT5BXl3bhjVevQP6lmwaCgL006K3274UTqJcEoEGxsqu0o80wdFHN55BTtF9AAfd54w6H-n2M23pPlB8A-fBHFxnDI7HqGSzRAhGxUV679D0czwDU1DO3MfS6iMRyKBCfVGU-tnHgoTDkSarBeiyBweGpMODU9pzfj8a_Tey9igmubNnYNJ-ONSxGgdZPLD6pdsNqHhabOVJJOrrW0Z9oiJateEq1dZN3PnCqXnSxy5j1F19RSJCc6ht47waEF6zQAFoZ-_UVNY8WgHZoOxbkT_41ECA';
  private urlApi = 'https://af3tqle6wgdocsdirzlfrq7w5m.apigateway.sa-saopaulo-1.oci.customer-oci.com/fiap-sandbox/open-banking/v1/accounts/00711234522/balances';
  private urlMockCliente = 'https://demo9697815.mockable.io/clientes';

  constructor(public http: HttpClient, public clientModule: HttpClientModule) { }

    consultarSaldo(){

      let headersFull = new HttpHeaders();
      headersFull = headersFull.set('Authorization', this.authToken).set('Content-Type', 'application/json');
      return this.http.get(this.urlApi, {headers: headersFull})
        .pipe(
          map((res: any) => {
            return res.data;
          }),
          );
      }

      obterClientesMock(){
        return this.http.get(this.urlMockCliente);
      }
  }
