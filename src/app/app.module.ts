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
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component';
import { ShowNodePropertyDialogComponent } from './show-node-property-dialog/show-node-property-dialog.component'
import { HttpClientModule } from '@angular/common/http';
import { NodeInfoComponent } from './node-info/node-info.component';
@NgModule({
  declarations: [
    AppComponent,
    InfrastructureComponent,
    AddBTSDialogComponent,
    AddLinkDialogComponent,
    ShowNodePropertyDialogComponent,
    NodeInfoComponent
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
    FormsModule,
    HttpClientModule
  ],
  entryComponents:[AddBTSDialogComponent,AddLinkDialogComponent,NodeInfoComponent],
  providers: [PadiCytoscape],
  bootstrap: [AppComponent]
})
export class AppModule { }
