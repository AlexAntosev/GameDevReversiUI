import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/components/app-routing.module';
import { AppHeaderComponent } from 'src/app/components/core/header/app-header.component';
import { LayoutComponent } from 'src/app/components/core/layout/layout.component';

@NgModule({
  declarations: [AppHeaderComponent, LayoutComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule]
})
export class LayoutModule {}
