import { SimpleChange, SimpleChanges } from '@angular/core';
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

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();

    // O OnChanges deve ser chamado manualmente para ser detectado, pois depende de um template.
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true),
    };
    component.ngOnChanges(change);

    expect(component.rows.length).withContext('Numbers of rows').toBe(2);

    expect(component.rows[0].length)
      .withContext('Number of columns from the first Row')
      .toBe(4);

    expect(component.rows[1].length)
      .withContext('Number of columns from the second Row')
      .toBe(4);
  });
});
