import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PossibleMovesRequestedAction } from 'src/app/actions/board/possible-moves-requested.action';
import { PlayerSwitchAction } from 'src/app/actions/players/player-switch.action';
import { Position } from 'src/app/models/app/board/position';
import { Player } from 'src/app/models/app/player/player';
import { Color } from 'src/app/models/enums/color';
import { Store } from 'src/app/stores/store';

@Component({
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input()
  player: Player;

  isPlayerTurnNow: boolean;
  isNoAvailableMoves: boolean;
  currentPlayer$: Observable<Player>;
  possibleMoves$: Observable<Position[]>;

  constructor(
    store: Store,
    private playerSwitchAction: PlayerSwitchAction,
    private possibleMovesRequestedAction: PossibleMovesRequestedAction) {
    this.currentPlayer$ = store.pagesStore.newGame.currentPlayer$;
    this.possibleMoves$ = store.pagesStore.newGame.possibleMoves$;
  }

  ngOnInit() {
    this.currentPlayer$.subscribe(currentPlayer => {
      this.isPlayerTurnNow = this.player === currentPlayer;
    });

    this.possibleMoves$.subscribe(possibleMoves => {
      this.isNoAvailableMoves = possibleMoves.length === 0;
    });
  }

  getPlayerColor() {
    return this.player.color === Color.Light ? "Light" : "Dark";
  }

  pass() {
    this.playerSwitchAction.execute();
    this.possibleMovesRequestedAction.execute();
  }
}
