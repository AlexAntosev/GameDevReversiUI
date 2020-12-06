import { Injectable } from '@angular/core';
import { IPlayer } from 'src/app/models/api/player/i-player';
import { Player } from 'src/app/models/app/player/player';

@Injectable()
export class PlayerService {
  mapToModel(player: IPlayer): Player {
    return {
      id: player.id,
      color: player.color
    };
  }

  mapToEntity(player: Player): IPlayer {
    return {
      id: player.id,
      color: player.color
    };
  }
}
