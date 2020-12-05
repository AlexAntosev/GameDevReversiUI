import { NgModule } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';
import { CellService } from 'src/app/services/cell.service';
import { PositionService } from 'src/app/services/position.service';

@NgModule({
  providers: [BoardService, CellService, PositionService]
})
export class ServicesModule {}
