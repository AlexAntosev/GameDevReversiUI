import { IDisk } from 'src/app/models/api/board/i-disk';
import { IPosition } from 'src/app/models/api/board/i-position';

export interface ICell {
  position: IPosition,
  isEmpty: boolean,
  disk: IDisk
}
