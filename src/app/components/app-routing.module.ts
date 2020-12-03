import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/components/core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/new-game',
          pathMatch: 'full'
        },
        {
          path: 'new-game',
          loadChildren: () =>
            import('src/app/components/pages/new-game/new-game.module').then(
              m => m.NewGameModule
            )
        }
      ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
