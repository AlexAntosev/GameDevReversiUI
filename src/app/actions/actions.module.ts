import { NgModule } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { MakeTurnAction } from 'src/app/actions/board/make-turn.action';
import { PossibleMovesRequestedAction } from 'src/app/actions/board/possible-moves-requested.action';
import { PlayerSwitchAction } from 'src/app/actions/players/player-switch.action';
import { PlayersRequestedAction } from 'src/app/actions/players/players-requested.action';

@NgModule({
  providers: [
    BoardRequestedAction,
    PlayersRequestedAction,
    PlayerSwitchAction,
    MakeTurnAction,
    PossibleMovesRequestedAction]
})
export class ActionsModule {}
