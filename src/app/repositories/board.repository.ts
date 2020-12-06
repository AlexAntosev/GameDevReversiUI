import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from 'src/app/models/api/board/i-board';
import { IPosition } from 'src/app/models/api/board/i-position';
import { IWinner } from 'src/app/models/api/player/i-winner';
import { Position } from 'src/app/models/app/board/position';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class BoardRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getBoard(): Observable<IBoard> {
    return this.get<IBoard>('board');
  }

  makeTurn(playerId: string, position: Position) {
    var body = {
      playerId: playerId,
      cell: position.column+position.row
    }
    return this.post('board/make-turn', body);
  }

  getPossibleMoves(playerId: string): Observable<IPosition[]> {
    return this.get<IPosition[]>(`board/possible-moves/${playerId}`);
  }

  checkWinner(): Observable<IWinner> {
    return this.get<IWinner>(`board/check-winner`);
  }
}
