import { Injectable } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { PossibleMovesRequestedAction } from 'src/app/actions/board/possible-moves-requested.action';
import { IAction } from 'src/app/actions/i-action';
import { PlayerSwitchAction } from 'src/app/actions/players/player-switch.action';
import { SessionRepository } from 'src/app/repositories/session.repository';

@Injectable()
export class MakeTurnAction implements IAction {
  constructor(
    private sessionRepository: SessionRepository,
    private boardRequestedAction: BoardRequestedAction,
    private playerSwitchAction: PlayerSwitchAction,
    private possibleMovesRequestedAction: PossibleMovesRequestedAction
  ) {}

  execute(position: [string, string], playerId: string): void {
    this.sessionRepository.makeTurn(playerId, position[0], position[1])
    .subscribe(_ => {
      this.boardRequestedAction.execute();
      this.playerSwitchAction.execute();
      this.possibleMovesRequestedAction.execute();
    });
  }
}
