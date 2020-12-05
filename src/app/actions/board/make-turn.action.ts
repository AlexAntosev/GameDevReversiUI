import { Injectable } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { IAction } from 'src/app/actions/i-action';
import { SessionRepository } from 'src/app/repositories/session.repository';
import { Store } from 'src/app/stores/store';

@Injectable()
export class MakeTurnAction implements IAction {
  constructor(
    private store: Store,
    private sessionRepository: SessionRepository,
    private boardRequestedAction: BoardRequestedAction
  ) {}

  execute(position: [string, string], playerId: string): void {
    this.sessionRepository.makeTurn(playerId, position[0], position[1])
    .subscribe(_ => this.boardRequestedAction.execute());
  }
}
