import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA ,MatDialogRef } from '@angular/material'
import { PadiCytoscape } from '../../padicytoscape';
import { NodeService } from '../node.service';
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
    private cy: PadiCytoscape,
    private nodeservice : NodeService
  ) {
    console.log("Data got : ",data)
    this.component = data.component
  }
  updateComponent(component){
    let id = component._id
    console.log("ID",id)
    console.log("Component",component)
    //this.cy.updateNode(component.id,component,()=>{
      this.dref.close()
    //})
    //component.id = component._id
    /*this.nodeservice.updatenode(component, result => {
      this.cy.updateNode(this.data.component.name,component,() => {
        this.dref.close()
      })      
    })*/
  }
  closeDialog(){
    this.dref.close()
  }
  ngOnInit() {
  }
  removeComponent(component){
    this.nodeservice.removeNode(component, ()=>{})
  }
}
