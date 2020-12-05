import { NgModule } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { MakeTurnAction } from 'src/app/actions/board/make-turn.action';
import { PlayersRequestedAction } from 'src/app/actions/players/players-requested.action';

@NgModule({
  providers: [BoardRequestedAction, PlayersRequestedAction, MakeTurnAction]
})
export class ActionsModule {}
