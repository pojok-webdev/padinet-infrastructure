import { Component, OnInit, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { NodeService } from '../node.service';
import { EdgeService } from '../edge.service';

@Component({
  selector: 'app-edge-info',
  templateUrl: './edge-info.component.html',
  styleUrls: ['./edge-info.component.css']
})
export class EdgeInfoComponent implements OnInit {
  edge = {
    id:'',name:'',source:'',linktype:'',target:''
  }
  // 0:IP_Transit-Core 1:core-rodis 2 rodis-bts 3 bts-bts 4 bts-ap 5 ap-client                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  networknodes = [
    {id:'0',name:'IP_Transit-Core'},
    {id:'1',name:'core-rodis'},
    {id:'2',name:'rodis-bts'},
    {id:'3',name:'bts-bts'},
    {id:'4',name:'bts-ap'},
    {id:'5',name:'ap-client'},
  ]
  linktypes = [
    {id:'0',name:'FO'},
    {id:'1',name:'Microwave'},
    {id:'2',name:'AirFiber'},
    {id:'3',name:'Mimosa'},
    {id:'4',name:'Mikrotik'},
    {id:'5',name:'UTP'},
    {id:'6',name:'STP'},
  ]
  btses
  vendors
  NotToHide = false
  constructor(
    private cy : PadiCytoscape, 
    private dref : MatDialogRef<EdgeInfoComponent>,
    @Inject (MAT_DIALOG_DATA) private data:any,
    private nodeservice : NodeService,
    private edgeservice : EdgeService
  ) {
    this.nodeservice.getnodes(result => {
      this.btses = result
      console.log("Node Result",result)
    })
    this.edgeservice.getVendors(result => {
      this.vendors = result
    })
    console.log("Component",this.data.component)
    this.edge = this.data.component
  }
  updateEdge(edge){
    //let eid = edge.id
    //edge.id = (edge.id).substring(1,(edge.id).length)
    console.log("Eid",edge.id)
    this.edgeservice.updateEdge(edge,result => {
      //edge.id = 'e'+edge.id
      this.cy.updateEdge(edge.id,edge,() => {
        this.dref.close()
      })
    })
  }
  ngOnInit() {
  }
  removeEdge(edge){
    this.edgeservice.removeedge(edge,result => {
      console.log("Edge",result)
      this.cy.removeEdge(edge.id)
      this.dref.close()
    })
  }
}
