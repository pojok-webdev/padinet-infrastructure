import { Component, OnInit } from '@angular/core';
import { EdgeService } from '../edge.service';
import { MatDialog } from '@angular/material';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';
import { PadiCytoscape } from '../../padicytoscape';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material'
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
    private edges : EdgeService,
    private cy : PadiCytoscape,
    private dialog : MatDialog,
    private route : ActivatedRoute,
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
          this.dataSource = new MatTableDataSource(result)
        })
      break
    }
    console.log("Route",this.route.snapshot.params)
    
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
  clearSearchbox(){
    this.searchBox = ""
    this.applyFilter("")
  }
}
