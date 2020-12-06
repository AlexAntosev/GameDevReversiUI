import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseRepository } from 'src/app/repositories/base.repository';

@Injectable()
export class SessionRepository extends BaseRepository {
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  createNew(): Observable<any> {
    return this.post('session');
  }
}
