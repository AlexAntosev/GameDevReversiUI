import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from 'src/app/models/api/player/i-player';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class PlayersRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getPlayers(): Observable<IPlayer[]> {
    return this.get<IPlayer[]>('players');
  }
}
