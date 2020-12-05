import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard } from 'src/app/models/api/board/i-board';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class SessionRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  getBoard(): Observable<IBoard> {
    return this.get<IBoard>('session/board');
  }
}
