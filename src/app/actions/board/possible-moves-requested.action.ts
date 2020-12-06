import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { SessionRepository } from 'src/app/repositories/session.repository';
import { Store } from 'src/app/stores/store';

@Injectable()
export class PossibleMovesRequestedAction implements IAction {
  constructor(
    private store: Store,
    private sessionRepository: SessionRepository
  ) {}

  execute(): void {
    var playerId = this.store.pagesStore.newGame.currentPlayer$.value.id;
    this.sessionRepository.getPossibleMoves(playerId).subscribe(positions => {
      this.store.pagesStore.newGame.possibleMoves$.next(positions);
    });
  }
}
