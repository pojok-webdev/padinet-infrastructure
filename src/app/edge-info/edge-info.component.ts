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
      console.log("BTS Result",result)
    })
    this.edge = this.data.component
    this.edge.source = this.data.component.src
    this.edge.target = this.data.component.tgt
  }
  updateEdge(edge){
    edge.tgt = edge.target
    this.edgeservice.updateEdge(edge,result => {
      this.cy.updateEdge(edge.id,edge,() => {
        this.dref.close()
      })
    })
  }
  ngOnInit() {
  }

}
