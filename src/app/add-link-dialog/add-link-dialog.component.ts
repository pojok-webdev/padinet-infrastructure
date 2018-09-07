import { Component, OnInit, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape';
import { NodeService } from '../node.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material'
import { EdgeService } from '../edge.service';

@Component({
  selector: 'app-add-link-dialog',
  templateUrl: './add-link-dialog.component.html',
  styleUrls: ['./add-link-dialog.component.css']
})
export class AddLinkDialogComponent implements OnInit {
  btses
  constructor(
    private padiCS:PadiCytoscape,
    private nodes : NodeService,
    public dref:MatDialogRef<AddLinkDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private edge: EdgeService
  ) {
    this.nodes.getnodes(result => {
      console.log("Result", result);
      this.btses = result
    })
  }
  obj = {
    id:'',source:'',target:''
  }
  ngOnInit() {
  }
  saveEdge(edge){
    edge.source = edge.source.toString();
    edge.target = edge.target.toString();
    let obj = {data:edge}
    console.log("Edge",edge)
    //edge.linktype = "1"
    edge.createuser = "anonymous"
    this.edge.saveEdge(edge,result => {
      console.log("Save Edge Result",result)
      obj.data.id = result.insertId
      this.padiCS.addEdge(obj,() => {
        this.dref.close()
      })  
    })
  }
}
