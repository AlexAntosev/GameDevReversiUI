import { Injectable } from '@angular/core';
import { IBoard } from 'src/app/models/api/board/i-board';
import { Board } from 'src/app/models/app/board/board';
import { CellService } from 'src/app/services/cell.service';

@Injectable()
export class BoardService {

  constructor(private cellService: CellService) {}

  mapToModel(board: IBoard): Board {
    return {
      cells: board.cells.map(c =>this.cellService.mapToModel(c))
    };
  }

  mapToEntity(board: Board): IBoard {
    return {
      cells: board.cells.map(c =>this.cellService.mapToEntity(c))
    };
  }
}
