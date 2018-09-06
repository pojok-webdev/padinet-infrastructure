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
    id:'',name:'',source:'',target:''
  }
  btses
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
    this.edge = this.data.component
  }
  updateEdge(edge){
    let eid = edge.id
    edge.id = (edge.id).substring(1,(edge.id).length)
    console.log("Eid",edge.id)    
    this.edgeservice.updateEdge(edge,result => {
      this.cy.updateEdge(eid,edge,() => {
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
