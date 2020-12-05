import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsModule } from 'src/app/actions/actions.module';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppComponent } from 'src/app/components/app.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { RepositoriesModule } from 'src/app/repositories/repositories.module';
import { ServicesModule } from 'src/app/services/services.module';
import { StoresModule } from 'src/app/stores/stores.module';

@NgModule({
  imports: [
    ComponentsModule,
    ActionsModule,
    StoresModule,
    ServicesModule,
    RepositoriesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
