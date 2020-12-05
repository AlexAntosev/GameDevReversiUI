import { BehaviorSubject } from 'rxjs';
import { Board } from 'src/app/models/app/board/board';
import { Player } from 'src/app/models/app/player/player';

export class NewGameStore {
  board$: BehaviorSubject<Board> = new BehaviorSubject<Board>({} as Board);
  players$: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>([]);
}
