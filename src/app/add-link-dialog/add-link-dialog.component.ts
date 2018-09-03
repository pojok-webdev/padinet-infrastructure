import { Component, OnInit, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape';
import { NodeService } from '../node.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material'

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
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.nodes.getnodes(result => {
      console.log("Result", result);
      this.btses = result
    })
  }
  edge = {
    id:'',source:'',target:''
  }
  ngOnInit() {
  }
  saveEdge(edge){
    let obj = {data:edge}
    this.padiCS.addEdge(obj,() => {
      this.dref.close()
    })
  }
}
