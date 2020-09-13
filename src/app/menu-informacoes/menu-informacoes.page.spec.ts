import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuInformacoesPage } from './menu-informacoes.page';

describe('MenuInformacoesPage', () => {
  let component: MenuInformacoesPage;
  let fixture: ComponentFixture<MenuInformacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInformacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuInformacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
