import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './interfaces/photo';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

// Função utilitária para pegar as fotos do backend.
function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let i = 0; i < 8; i++) {
    photos.push({ id: i + 1, url: '', description: '' });
  }
  return photos;
}

describe(PhotoBoardComponent.name + ' outros', () => {
  let component: PhotoBoardTestComponent;
  let fixture: ComponentFixture<PhotoBoardTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    expect(component.board.rows.length).withContext('Numbers of rows').toBe(2);

    expect(component.board.rows[0].length)
      .withContext('Number of columns from the first Row')
      .toBe(4);

    expect(component.board.rows[1].length)
      .withContext('Number of columns from the second Row')
      .toBe(4);
  });
});

// Dummy Componente para uso de template
// A ideia é gerar um template genérico para que seja chamado o componente a ser testado.
@Component({
  template: ` <app-photo-board [photos]="photos"></app-photo-board> `,
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: Photo[] = [];
}
