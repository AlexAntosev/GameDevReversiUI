import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { PlayersRepository } from 'src/app/repositories/players.repository';
import { PlayerService } from 'src/app/services/player.service';
import { Store } from 'src/app/stores/store';

@Injectable()
export class PlayersRequestedAction implements IAction {
  constructor(
    private store: Store,
    private playersRepository: PlayersRepository,
    private playerService: PlayerService
  ) {}

  execute(): void {
    this.playersRepository.getPlayers().subscribe(players => {
      const playersModel = players.map(p => this.playerService.mapToModel(p));
      this.store.pagesStore.newGame.players$.next(playersModel);
    });
  }
}
