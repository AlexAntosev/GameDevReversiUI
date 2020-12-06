import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from 'src/app/components/pages/new-game/board/board.component';
import { NewGameRoutingModule } from 'src/app/components/pages/new-game/new-game-routing.module';
import { NewGameComponent } from 'src/app/components/pages/new-game/new-game.component';
import { PlayerComponent } from 'src/app/components/pages/new-game/player/player.component';

@NgModule({
  declarations: [NewGameComponent, BoardComponent, PlayerComponent],
  imports: [CommonModule, NewGameRoutingModule]
})
export class NewGameModule {}
