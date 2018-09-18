import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { InfrastructureComponent } from '../infrastructure/infrastructure.component';
import { TableviewComponent } from '../tableview/tableview.component';
import { SettingComponent } from '../setting/setting.component';
import { Table2ViewComponent } from '../table2-view/table2-view.component';

const route : Routes = [
  {path:'infrastructur',component:InfrastructureComponent},
  {path:'tableview',component:TableviewComponent},
  {path:'tableview/:component_type/:component_id',component:TableviewComponent},
  {path:'setting',component:SettingComponent},
  {path:'table2view',component:Table2ViewComponent}
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
