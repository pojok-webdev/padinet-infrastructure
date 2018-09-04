import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { EdgeService } from '../edge.service';
import { MatDialog } from '@angular/material';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {
dataSource = [{node:"satu"},{node:"dua"}]
columnDisplayed = ["id","name","source","target","action"]
  constructor(
    private nodes : NodeService,
    private edges : EdgeService,
    private dialog : MatDialog
  ) {
    this.edges.getedges(result => {
      this.dataSource = result
    })
  }

  ngOnInit() {
  }
  editEdge(edge){
    this.dialog.open(EdgeInfoComponent,{
      width: '500px',
      data:{
        component:edge
      }
    })
  }
}
