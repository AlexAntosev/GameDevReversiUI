import { Disk } from 'src/app/models/app/board/disk';
import { Position } from 'src/app/models/app/board/position';

export class Cell {
  position: Position = new Position();
  isEmpty: boolean = true;
  disk: Disk = new Disk();
}
