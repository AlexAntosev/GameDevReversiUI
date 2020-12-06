import { Injectable } from '@angular/core';
import { IAction } from 'src/app/actions/i-action';
import { BoardRepository } from 'src/app/repositories/board.repository';
import { BoardService } from 'src/app/services/board.service';
import { Store } from 'src/app/stores/store';

@Injectable()
export class BoardRequestedAction implements IAction {
  constructor(
    private store: Store,
    private boardRepository: BoardRepository,
    private boardService: BoardService
  ) {}

  execute(): void {
    this.boardRepository.getBoard().subscribe(board => {
      const boardModel = this.boardService.mapToModel(board);
      this.store.pagesStore.newGame.board$.next(boardModel);
    });
  }
}
