import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { PadiCytoscape } from '../padicytoscape';
import { MatMenuModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent,
    InfrastructureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    MatMenuModule,
    BrowserAnimationsModule
  ],
  providers: [PadiCytoscape],
  bootstrap: [AppComponent]
})
export class AppModule { }
