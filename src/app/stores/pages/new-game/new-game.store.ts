import { BehaviorSubject } from 'rxjs';
import { Board } from 'src/app/models/app/board/board';
import { Position } from 'src/app/models/app/board/position';
import { Player } from 'src/app/models/app/player/player';
import { Winner } from 'src/app/models/app/player/winner';

export class NewGameStore {
  board$: BehaviorSubject<Board> = new BehaviorSubject<Board>({} as Board);
  players$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
  possibleMoves$: BehaviorSubject<Position[]> = new BehaviorSubject<Position[]>([]);
  currentPlayer$: BehaviorSubject<Player> = new BehaviorSubject<Player>({} as Player);
  winner$: BehaviorSubject<Winner> = new BehaviorSubject<Winner>({} as Winner);
}
