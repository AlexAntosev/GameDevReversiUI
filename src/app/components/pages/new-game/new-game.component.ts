import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(store: Store) {
    this.board$ = store.pagesStore.newGame.board$;
  }

  ngOnInit() {
    this.board$.subscribe(board => (this.board = board));

    this.queryBoardState();
  }

  queryBoardState() {
    //this.boardStateRequestedAction.execute();
  }
}
