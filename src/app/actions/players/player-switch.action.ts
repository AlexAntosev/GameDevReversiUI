import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { Store } from 'src/app/stores/store';

@Injectable()
export class PlayerSwitchAction implements IAction {
  constructor(
    private store: Store
  ) {}

  execute(): void {
    var players = this.store.pagesStore.newGame.players$.value;
    var currentPlayer = this.store.pagesStore.newGame.currentPlayer$.value;
    if(currentPlayer === players[0]) {
      this.store.pagesStore.newGame.currentPlayer$.next(players[1]);
    }
    else {
      this.store.pagesStore.newGame.currentPlayer$.next(players[0]);
    }
  }
}
