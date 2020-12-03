import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NewGameRoutingModule } from 'src/app/components/pages/new-game/new-game-routing.module';
import { NewGameComponent } from 'src/app/components/pages/new-game/new-game.component';

@NgModule({
  declarations: [NewGameComponent],
  imports: [CommonModule, NewGameRoutingModule]
})
export class NewGameModule {}
