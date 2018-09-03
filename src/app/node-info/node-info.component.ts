import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material'
import { PadiCytoscape } from '../../padicytoscape';
@Component({
  selector: 'app-node-info',
  templateUrl: './node-info.component.html',
  styleUrls: ['./node-info.component.css']
})
export class NodeInfoComponent implements OnInit {
  component = {
   id:1,name:"he he",location:"Suraboyo" 
  }
  constructor(
    private dref: MatDialogRef<NodeInfoComponent>,
    @Inject (MAT_DIALOG_DATA) private data:any,
    private cy: PadiCytoscape
  ) {
    console.log("Data got : ",data)
    this.component = data.component
  }
  updateComponent(component){
    this.cy.updateNode(component.id,component)
  }
  closeDialog(){
    this.dref.close()
  }
  ngOnInit() {
  }

}
