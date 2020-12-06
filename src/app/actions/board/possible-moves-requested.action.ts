import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { BoardRepository } from 'src/app/repositories/board.repository';
import { Store } from 'src/app/stores/store';

@Injectable()
export class PossibleMovesRequestedAction implements IAction {
  constructor(
    private store: Store,
    private boardRepository: BoardRepository
  ) {}

  execute(): void {
    var playerId = this.store.pagesStore.newGame.currentPlayer$.value.id;
    this.boardRepository.getPossibleMoves(playerId).subscribe(positions => {
      this.store.pagesStore.newGame.possibleMoves$.next(positions);
    });
  }
}
