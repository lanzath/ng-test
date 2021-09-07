import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) once when called
    multiple times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();

    // Para a execução por 500 milissegundos.
    tick(500);

    expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) two times when
    called outside debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);

    expect(times).toBe(2);
  }));

  // (D) é uma convenção utilizada para dizer que é um teste com integração com o DOM
  it('(D) Should display number of likes when (@Input likes) is incremented', () => {
    // fixture para o OnInit.
    fixture.detectChanges();
    component.likes++;

    // fixture para detectar mudança de estado no DOM.
    fixture.detectChanges();

    // Pega o elemento nativo do Dom para verificar se houve alteração.
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');

    // textContent devolve uma string
    // trim() é utilizado para remoção de espaços.
    expect(element.textContent.trim()).toBe('1');
  });

  it('(D) Should update aria-label when (@Input likes) is incremented', () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it('(D) Should have aria-label with 0 (@Input likes)', () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it('(D) Should display image with src and description when bound to properties', () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';

    component.src = src;
    component.description = description;
    fixture.detectChanges();

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
