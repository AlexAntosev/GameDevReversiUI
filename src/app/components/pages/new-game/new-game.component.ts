import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardRequestedAction } from 'src/app/actions/board/board-requested.action';
import { Board } from 'src/app/models/app/board/board';
import { Store } from 'src/app/stores/store';

@Component({
  selector: 'new-game',
  templateUrl: 'new-game.component.html',
  styleUrls: ['new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  board$: Observable<Board>;
  board: Board;

  constructor(store: Store, private boardRequestedAction: BoardRequestedAction) {
    this.board$ = store.pagesStore.newGame.board$;
  }

  ngOnInit() {
    this.board$.subscribe(board => (this.board = board));

    this.getBoard();
  }

  getBoard() {
    this.boardRequestedAction.execute();
  }
}
