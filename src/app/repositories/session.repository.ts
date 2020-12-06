import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from 'src/app/models/api/board/i-board';
import { IPosition } from 'src/app/models/api/board/i-position';
import { IPlayer } from 'src/app/models/api/player/i-player';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class SessionRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getBoard(): Observable<IBoard> {
    return this.get<IBoard>('session/board');
  }

  getPlayers(): Observable<IPlayer[]> {
    return this.get<IPlayer[]>('session/players');
  }

  makeTurn(playerId: string, row: string, column: string) {
    var body = {
      playerId: playerId,
      cell: row+column
    }
    return this.post('session/make-turn', body);
  }

  getPossibleMoves(playerId: string): Observable<IPosition[]> {
    return this.get<IPosition[]>(`session/possible-moves/${playerId}`);
  }
}
