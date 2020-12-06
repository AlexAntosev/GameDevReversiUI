import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Board } from 'src/app/models/app/board/board';
import { Position } from 'src/app/models/app/board/position';
import { Color } from 'src/app/models/enums/color';

@Component({
  selector: 'board',
  templateUrl: 'board.component.html',
  styleUrls: ['board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input()
  board: Board;

  @Input()
  possibleMoves: Position[];

  @Output()
  makeTurnEventEmitter: EventEmitter<[string, string]> = new EventEmitter<[string, string]>();

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
    if(this.possibleMoves && this.possibleMoves.some(c => c.row === row && c.column === column)){
      var imagePath = '../../../../../assets/PossibleDisk.png';
    }
    var disk = this.getCellPosition(row, column);
    if(disk !== null && disk.color === Color.Dark) {
      imagePath = '../../../../../assets/DarkDisk.png';
    }
    if(disk !== null && disk.color === Color.Light) {
      imagePath = '../../../../../assets/LightDisk.png';
    }

    return imagePath;
  }

  makeTurn(row: string, column: string) {
    this.makeTurnEventEmitter.emit([row, column]);
  }
}
