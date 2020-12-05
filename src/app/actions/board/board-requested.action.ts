import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { SessionRepository } from 'src/app/repositories/session.repository';
import { BoardService } from 'src/app/services/board.service';
import { Store } from 'src/app/stores/store';

@Injectable()
export class BoardRequestedAction implements IAction {
  constructor(
    private store: Store,
    private sessionRepository: SessionRepository,
    private boardService: BoardService
  ) {}

  execute(): void {
    this.sessionRepository.getBoard().subscribe(board => {
      const boardModel = this.boardService.mapToModel(board);
      this.store.pagesStore.newGame.board$.next(boardModel);
    });
  }
}
