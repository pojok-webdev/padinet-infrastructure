import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfrastructureComponent } from './infrastructure/infrastructure.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { PadiCytoscape } from '../padicytoscape';
import { MatMenuModule, MatButtonModule, MatDialogModule, MatInputModule, MatSelectModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatIconModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddBTSDialogComponent } from './add-btsdialog/add-btsdialog.component'
import { FormsModule } from '@angular/forms';
import { AddLinkDialogComponent } from './add-link-dialog/add-link-dialog.component';
import { ShowNodePropertyDialogComponent } from './show-node-property-dialog/show-node-property-dialog.component'
import { HttpClientModule } from '@angular/common/http';
import { NodeInfoComponent } from './node-info/node-info.component';
import { EdgeInfoComponent } from './edge-info/edge-info.component';
import { TableviewComponent } from './tableview/tableview.component';
import { SettingComponent } from './setting/setting.component';
import { Table2ViewComponent } from './table2-view/table2-view.component';
import { VendorPipe } from './vendor.pipe';
@NgModule({
  declarations: [
    AppComponent,
    InfrastructureComponent,
    AddBTSDialogComponent,
    AddLinkDialogComponent,
    ShowNodePropertyDialogComponent,
    NodeInfoComponent,
    EdgeInfoComponent,
    TableviewComponent,
    SettingComponent,
    Table2ViewComponent,
    VendorPipe
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
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatIconModule
  ],
  entryComponents:[AddBTSDialogComponent,AddLinkDialogComponent,NodeInfoComponent,EdgeInfoComponent],
  providers: [PadiCytoscape],
  bootstrap: [AppComponent]
})
export class AppModule { }
