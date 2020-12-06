import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from 'src/app/models/api/board/i-board';
import { IPosition } from 'src/app/models/api/board/i-position';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class BoardRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getBoard(): Observable<IBoard> {
    return this.get<IBoard>('board');
  }

  makeTurn(playerId: string, row: string, column: string) {
    var body = {
      playerId: playerId,
      cell: row+column
    }
    return this.post('board/make-turn', body);
  }

  getPossibleMoves(playerId: string): Observable<IPosition[]> {
    return this.get<IPosition[]>(`board/possible-moves/${playerId}`);
  }
}
