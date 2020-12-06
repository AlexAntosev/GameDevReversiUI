import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/app/player/player';
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
  currentPlayer$: Observable<Player>;

  constructor(private store: Store) {
    this.currentPlayer$ = store.pagesStore.newGame.currentPlayer$;
  }

  ngOnInit() {
    this.currentPlayer$.subscribe(currentPlayer => {
      this.isPlayerTurnNow = this.player === currentPlayer;
    });
  }
}
