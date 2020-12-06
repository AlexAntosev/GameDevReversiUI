import { Component } from '@angular/core';
import { CreateNewSessionAction } from 'src/app/actions/session/create-new-session.action';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  constructor(private createNewSessionAction: CreateNewSessionAction) {

  }

  createNewSession() {
    this.createNewSessionAction.execute();
  }
}
