import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BoardRepository } from 'src/app/repositories/board.repository';
import { PlayersRepository } from 'src/app/repositories/players.repository';
import { SessionRepository } from 'src/app/repositories/session.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [BoardRepository, PlayersRepository, SessionRepository]
})
export class RepositoriesModule {}
