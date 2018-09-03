import * as CY from '../../..//node_modules/cytoscape/dist/cytoscape'
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape'
import { MatDialog  } from '@angular/material';
import { AddBTSDialogComponent } from '../add-btsdialog/add-btsdialog.component';
import { AddLinkDialogComponent } from '../add-link-dialog/add-link-dialog.component';
import { BtsService } from '../bts.service';
import { NodeInfoComponent } from '../node-info/node-info.component';
@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  @ViewChild('cy') div :ElementRef
  cytos
  btses
  constructor(
    private cy:PadiCytoscape,
    private dialog:MatDialog,
    private bts:BtsService
  ) {
  }
  globalnodes = []
  globaledges = []
  ngOnInit() {
  }
  getRandomNum(){
    return Math.floor((Math.random() * 100) + 1);
  }
  initNodes(callback){
    this.bts.getbtstowers(result => {
      this.btses = result
      result.forEach(node => {
        node.id = node.name
        this.globalnodes.push({data:node})
      });
      callback(result)
    })
  }
  initLinks(callback){
    this.bts.getlinks(result => {
      this.btses = result
      callback(result)
    })
  }
  ngAfterViewInit(){
    console.log('DIV',this.div.nativeElement)
    this.initNodes(nodes=>{
      this.initLinks(edges=>{
        console.log("Get Init Links invoked")
        edges.forEach(edge=>{
          console.log("edge",edge)
          edge.source = edge.src
          edge.target = edge.tgt
          this.globaledges.push({data:edge})
        })
        this.cy.initCy(this.globalnodes,this.globaledges,this.div.nativeElement,result=>{
          result.on('click','node',(evt) => {
            console.log("EVT",evt.target._private.data)
            this.dialog.open(NodeInfoComponent,{
              width: '500px',
              data:{
                component:evt.target._private.data
              }
            })
        })
      })
    })
  })
}
  showNodeProperty(){
    this.cytos.add({data:{id:'Bogor'}})
  }
  addBTS(){

    this.dialog.open(AddBTSDialogComponent,{
      width:'500px',
      data:{
        title:'Add BTS'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        //
      }
    )
  }
  addLink(){
    this.dialog.open(AddLinkDialogComponent,{
      width:'500px',
      data:{
        title:'Add Link'
      }
    })
    .afterClosed()
    .subscribe(
      data => {}
    )
  }
  removeLink(){
    this.cy.removeEdge()
  }
  removeNode(){
    this.cy.removeNode()
  }
  updateNode(id,data){
    this.cy.updateNode(id,data)
  }
}
