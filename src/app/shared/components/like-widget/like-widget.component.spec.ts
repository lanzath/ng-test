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

  it('Should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    // Detecta os ciclos de vida do componente (OnInit, OnChanges, OnDestroy...).
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}
    should trigger (@Output liked) when called`, () => {
    // Fica "espiando" um método de um Emitter
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    // O método toHaveBeenCalled() espera que haja um spyOn() declarado.
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
