import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { SessionRepository } from 'src/app/repositories/session.repository';

@Injectable()
export class CreateNewSessionAction implements IAction {
  constructor(
    private sessionRepository: SessionRepository
  ) {}

  execute(): void {
    this.sessionRepository.createNew().subscribe();
  }
}
