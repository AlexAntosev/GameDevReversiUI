import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/app/player/player';

@Component({
  selector: 'winner-popup',
  templateUrl: 'winner-popup.component.html',
  styleUrls: ['winner-popup.component.scss']
})
export class WinnerPopupComponent implements OnInit {
  @Input()
  player: Player;

  constructor() {
  }

  ngOnInit() {
  }
}
