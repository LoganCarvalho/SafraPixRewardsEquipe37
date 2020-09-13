import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultarSaldoPage } from './consultar-saldo.page';

describe('ConsultarSaldoPage', () => {
  let component: ConsultarSaldoPage;
  let fixture: ComponentFixture<ConsultarSaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSaldoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultarSaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
