import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  // Wrapper que terá a instância do componente e métodos auxiliares para testes.
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(async () => {
    // Cria e configura um módulo de teste com os mesmos parâmetros do módulo do componente
    // compileComponents é um método assíncrono que retorna uma Promise
    // faz-se necessário o uso do async/await
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      imports: [FontAwesomeModule],
      providers: [UniqueIdService],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  });

  it('Should create component', () => {
    const instance = fixture.componentInstance;

    // Caso o componente não tenha sido criado, será falso o expect.
    expect(instance).toBeTruthy();
  });
});
