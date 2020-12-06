import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { BoardRepository } from 'src/app/repositories/board.repository';
import { Store } from 'src/app/stores/store';

@Injectable()
export class CheckWinnerAction implements IAction {
  constructor(
    private store: Store,
    private boardRepository: BoardRepository,
  ) {}

  execute(): void {
    this.boardRepository.checkWinner().subscribe(winner =>
      this.store.pagesStore.newGame.winner$.next(winner));
  }
}
