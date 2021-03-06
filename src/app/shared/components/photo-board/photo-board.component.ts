import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from './interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() public photos: Photo[];
  public rows: any[][] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // Detecta se houve mudança na input property photos.
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;
    for (let index = 0; index < photos?.length; index += 4) {
      newRows.push(photos.slice(index, index + step));
    }

    return newRows;
  }
}
