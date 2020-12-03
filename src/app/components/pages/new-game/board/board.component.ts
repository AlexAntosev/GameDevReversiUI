import { Component, Input } from '@angular/core';
import { Board } from 'src/app/models/app/board/board';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})
export class BoardComponent {
  @Input()
  board: Board;

  constructor() { }
}
