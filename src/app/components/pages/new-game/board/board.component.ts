import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/models/app/board/board';
import { Cell } from 'src/app/models/app/board/cell';
import { Color } from 'src/app/models/enums/color';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})
export class BoardComponent implements OnInit {
  _board: Board;

  get board(): Board {
    return this._board;
  }

  @Input()
  set board(value: Board){
    this._board = value;
    this.cells = value.cells;
  }

  cells: Cell[];
  rowsCount: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  columnsCount: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];

  constructor() {

  }

  ngOnInit() {
  }

  getCellPosition(row: string, column: string){
    return this.board.cells.find(c => c.position.row === row && c.position.column === column).disk;
  }

  getCellImagePath(row: string, column: string) {
    var imagePath = '../../../../../assets/EmptyDisk.png';
    var disk = this.getCellPosition(row, column);
    if(disk !== null && disk.color === Color.Dark) {
      imagePath = '../../../../../assets/DarkDisk.png';
    }
    if(disk !== null && disk.color === Color.Light) {
      imagePath = '../../../../../assets/LightDisk.png';
    }

    return imagePath;
  }
}
