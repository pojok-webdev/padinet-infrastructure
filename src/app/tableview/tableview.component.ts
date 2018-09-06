import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { EdgeService } from '../edge.service';
import { MatDialog } from '@angular/material';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';
import { PadiCytoscape } from '../../padicytoscape';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {
dataSource
columnDisplayed = ["name","source","target","action"]
  constructor(
    private nodes : NodeService,
    private edges : EdgeService,
    private cy : PadiCytoscape,
    private dialog : MatDialog,
    private route : ActivatedRoute
  ) {
    let config = this.route.routeConfig
    let params = this.route.snapshot.params
    console.log("COnfig",config)
    switch(config.path){
      case 'tableview':
      console.log("No params provided")
      this.edges.getedges({node_id:null},result => {
        this.dataSource = result
      })
      break
      case 'tableview/:component_type/:component_id':
      console.log("Parameter provided exists")
        this.edges.getedges({node_id:params.component_id},result => {
          this.dataSource = result
        })
      break
    }
    console.log("Route",this.route.snapshot.params)
  }

  ngOnInit() {
  }
  editEdge(edge){
    //edge.id = 'e'+edge.id
    edge.source = edge.source.toString()
    edge.target = edge.target.toString()
    console.log("Edge",edge)
    this.dialog.open(EdgeInfoComponent,{
      width: '500px',
      data:{
        component:edge
      }
    })
  }
  removeEdge(element){
    console.log("Elemeent",element)
    this.edges.removeedge(element,result => {
      this.cy.removeEdge(element.id)
      console.log("Result",result)
    })
  }
}
