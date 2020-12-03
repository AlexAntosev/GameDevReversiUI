import { BehaviorSubject } from 'rxjs';
import { Board } from 'src/app/models/app/board/board';

export class NewGameStore {
  board$: BehaviorSubject<Board> = new BehaviorSubject<Board>({} as Board);
}
