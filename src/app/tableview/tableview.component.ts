import { Component, OnInit } from '@angular/core';
import { NodeService } from '../node.service';
import { EdgeService } from '../edge.service';
import { MatDialog, MatIconRegistry } from '@angular/material';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';
import { PadiCytoscape } from '../../padicytoscape';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {
dataSource : MatTableDataSource<any>
columnDisplayed = ["name","source","saddress","scity","target","taddress","tcity","action"]
searchBox = ""
  constructor(
    private nodes : NodeService,
    private edges : EdgeService,
    private cy : PadiCytoscape,
    private dialog : MatDialog,
    private route : ActivatedRoute,
    private iconRegistry : MatIconRegistry,
    private sanitizer : DomSanitizer
  ) {
    let config = this.route.routeConfig
    let params = this.route.snapshot.params
    console.log("COnfig",config)
    switch(config.path){
      case 'tableview':
      console.log("No params provided")
      this.edges.getedges({node_id:null},result => {
        this.dataSource = new MatTableDataSource(result)
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
    this.iconRegistry
    .addSvgIcon(
      'backbutton',sanitizer.bypassSecurityTrustResourceUrl('assets/baseline-backspace-24px.svg')
    )
  }
  applyFilter(filterValue: string) {
    console.log("filtervl",filterValue)
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }
  editEdge(edge){
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
