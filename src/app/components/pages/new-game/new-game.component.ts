import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { MakeTurnAction } from 'src/app/actions/board/make-turn.action';
import { PlayersRequestedAction } from 'src/app/actions/players/players-requested.action';
import { Board } from 'src/app/models/app/board/board';
import { Position } from 'src/app/models/app/board/position';
import { Player } from 'src/app/models/app/player/player';
import { Store } from 'src/app/stores/store';

@Component({
  selector: 'new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  board$: Observable<Board>;
  board: Board;

  players$: Observable<Player[]>;
  players: Player[];

  possibleMoves$: Observable<Position[]>;
  possibleMoves: Position[];

  currentPlayer$: Observable<Player>;
  currentPlayer: Player;

  constructor(
    store: Store,
    private boardRequestedAction: BoardRequestedAction,
    private playersRequestedAction: PlayersRequestedAction,
    private makeTurnAction: MakeTurnAction) {
    this.board$ = store.pagesStore.newGame.board$;
    this.players$ = store.pagesStore.newGame.players$;
    this.possibleMoves$ = store.pagesStore.newGame.possibleMoves$;
    this.currentPlayer$ = store.pagesStore.newGame.currentPlayer$;
  }

  ngOnInit() {
    this.board$.subscribe(board => (this.board = board));

    this.players$.subscribe(players => {
      this.players = players;
      this.currentPlayer = this.players[1];
    });

    this.possibleMoves$.subscribe(possibleMoves => {
      this.possibleMoves = possibleMoves;
    });

    this.currentPlayer$.subscribe(currentPlayer => {
      this.currentPlayer = currentPlayer;
    });

    this.getPlayers();
    this.getBoard();
  }

  getBoard() {
    this.boardRequestedAction.execute();
  }

  getPlayers() {
   this.playersRequestedAction.execute();
  }

  makeTurn(position: [string, string]) {
    this.makeTurnAction.execute(position, this.currentPlayer.id);
  }
}
