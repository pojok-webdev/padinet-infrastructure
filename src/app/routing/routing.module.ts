import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router'
import { InfrastructureComponent } from '../infrastructure/infrastructure.component';

const route : Routes = [
  {path:'infrastructur',component:InfrastructureComponent},
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
