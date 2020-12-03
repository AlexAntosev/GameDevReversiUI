import { Injectable } from '@angular/core';
import { PagesStore } from 'src/app/stores/pages/pages.store';

@Injectable()
export class Store {
  pagesStore = new PagesStore();
}
