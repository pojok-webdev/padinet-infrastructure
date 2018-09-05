import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { InfrastructureComponent } from '../infrastructure/infrastructure.component';
import { TableviewComponent } from '../tableview/tableview.component';

const route : Routes = [
  {path:'infrastructur',component:InfrastructureComponent},
  {path:'tableview',component:TableviewComponent},
  {path:'tableview/:component_type/:component_id',component:TableviewComponent},
  {path:'**',component:InfrastructureComponent}
] 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  declarations: []
})
export class RoutingModule { }
