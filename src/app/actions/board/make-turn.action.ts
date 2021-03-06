import { Injectable } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { PossibleMovesRequestedAction } from 'src/app/actions/board/possible-moves-requested.action';
import { IAction } from 'src/app/actions/i-action';
import { PlayerSwitchAction } from 'src/app/actions/players/player-switch.action';
import { CheckWinnerAction } from 'src/app/actions/session/check-winner.action';
import { Position } from 'src/app/models/app/board/position';
import { BoardRepository } from 'src/app/repositories/board.repository';

@Injectable()
export class MakeTurnAction implements IAction {
  constructor(
    private boardRepository: BoardRepository,
    private boardRequestedAction: BoardRequestedAction,
    private playerSwitchAction: PlayerSwitchAction,
    private possibleMovesRequestedAction: PossibleMovesRequestedAction,
    private checkWinnerAction: CheckWinnerAction
  ) {}

  execute(position: Position, playerId: string): void {
    this.boardRepository.makeTurn(playerId, position)
    .subscribe(_ => {
      this.playerSwitchAction.execute();
      this.boardRequestedAction.execute();
      this.possibleMovesRequestedAction.execute();
      this.checkWinnerAction.execute();
    });
  }
}
