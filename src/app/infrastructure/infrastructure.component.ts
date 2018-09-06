import * as CY from '../../..//node_modules/cytoscape/dist/cytoscape'
import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape'
import { MatDialog  } from '@angular/material';
import { AddBTSDialogComponent } from '../add-btsdialog/add-btsdialog.component';
import { AddLinkDialogComponent } from '../add-link-dialog/add-link-dialog.component';
import { NodeService } from '../node.service';
import { NodeInfoComponent } from '../node-info/node-info.component';
import { EdgeInfoComponent } from '../edge-info/edge-info.component';
import { EdgeService } from '../edge.service';
@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  @ViewChild('cy') div :ElementRef
  cytos
  btses
  edges
  constructor(
    private cy:PadiCytoscape,
    private dialog:MatDialog,
    private bts:NodeService,
    private edge:EdgeService
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
    this.bts.getnodes(result => {
      this.btses = result
      result.forEach(node => {
        
        this.globalnodes.push({data:node})
      });
      callback(result)
    })
  }
  initLinks(callback){
    this.edge.getedges({node_id:null},result => {
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
          edge.id = 'e'+edge.id
          console.log("edge",edge)
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

        result.on('click','edge',(evt) => {
          console.log("EVT",evt.target._private.data)
          this.dialog.open(EdgeInfoComponent,{
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
  addNode(){

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
  updateNode(){
    let id="Kentang",data={id:"OK"}
    this.cy.updateNode(id,data,result => {
      console.log("UpdateNode result",result)
    })
  }
}
