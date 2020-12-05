import { Injectable } from '@angular/core';
import { ICell } from 'src/app/models/api/board/i-cell';
import { Cell } from 'src/app/models/app/board/cell';
import { PositionService } from 'src/app/services/position.service';

@Injectable()
export class CellService {

  constructor(private positionService: PositionService) {}

  mapToModel(cell: ICell): Cell {
    return {
      position: this.positionService.mapToModel(cell.position),
      isEmpty: cell.isEmpty,
      disk: cell.disk
    };
  }

  mapToEntity(cell: Cell): ICell {
    return {
      position: this.positionService.mapToEntity(cell.position),
      isEmpty: cell.isEmpty,
      disk: cell.disk
    };
  }
}
