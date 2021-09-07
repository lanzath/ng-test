import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  // Wrapper que terá a instância do componente e métodos auxiliares para testes.
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    // Cria e configura um módulo de teste com os mesmos parâmetros do módulo do componente
    // compileComponents é um método assíncrono que retorna uma Promise
    // faz-se necessário o uso do async/await
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    // Caso o componente não tenha sido criado, será falso o expect.
    expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    // Detecta os ciclos de vida do componente (OnInit, OnChanges, OnDestroy...).
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger emission when called`, (done) => {
    fixture.detectChanges();

    // EventEmitter é um Observable, e a cada chamada irá verificar se houve uma emissão.
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      // O teste será dado como concluído quando done for chamado.
      done();
    });

    component.like();
  });
});
