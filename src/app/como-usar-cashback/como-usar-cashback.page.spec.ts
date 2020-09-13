import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComoUsarCashbackPage } from './como-usar-cashback.page';

describe('ComoUsarCashbackPage', () => {
  let component: ComoUsarCashbackPage;
  let fixture: ComponentFixture<ComoUsarCashbackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoUsarCashbackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComoUsarCashbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
