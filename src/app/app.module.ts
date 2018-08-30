import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { PadiCytoscape } from '../padicytoscape';
import { MatMenuModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBTSDialogComponent } from './add-btsdialog/add-btsdialog.component'
import { FormsModule } from '@angular/forms';
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component'
@NgModule({
  declarations: [
    AppComponent,
    InfrastructureComponent,
    AddBTSDialogComponent,
    AddLinkDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  entryComponents:[AddBTSDialogComponent,AddLinkDialogComponent],
  providers: [PadiCytoscape],
  bootstrap: [AppComponent]
})
export class AppModule { }
