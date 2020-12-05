import { Injectable } from '@angular/core';
import { IPosition } from 'src/app/models/api/board/i-position';
import { Position } from 'src/app/models/app/board/position';

@Injectable()
export class PositionService {
  mapToModel(position: IPosition): Position {
    return {
      row: position.row,
      column: position.column
    };
  }

  mapToEntity(position: Position): IPosition {
    return {
      row: position.row,
      column: position.column
    };
  }
}
