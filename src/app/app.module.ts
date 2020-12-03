import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppComponent } from 'src/app/components/app.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StoresModule } from 'src/app/stores/stores.module';

@NgModule({
  imports: [
    ComponentsModule,
    StoresModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
