import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SessionRepository } from 'src/app/repositories/session.repository';

@NgModule({
  imports: [HttpClientModule],
  providers: [SessionRepository]
})
export class RepositoriesModule {}
