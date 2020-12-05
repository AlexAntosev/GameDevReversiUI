import { NgModule } from '@angular/core';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';

@NgModule({
  providers: [BoardRequestedAction]
})
export class ActionsModule {}
