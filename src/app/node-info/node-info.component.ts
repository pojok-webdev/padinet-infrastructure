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
   mysqlid:1,id:1,name:"",location:"Suraboyo" 
  }
  obj = {
    id:1,name:"",location:"" 
   }
   neighboursDataSource = [
     {name:"A"},
     {name:"B"},
     {name:"C"}
    ]
  neighbourColumns = ["name","address","city","capacity","vendor","link"]
   constructor(
    private dref: MatDialogRef<NodeInfoComponent>,
    @Inject (MAT_DIALOG_DATA) private data:any,
    private cy: PadiCytoscape,
    private nodeservice : NodeService
  ) {
    console.log("Data got : ",data)
    this.component = data.component
    this.nodeservice.getNeighbours(this.component.id,result => {
      this.neighboursDataSource = result
    })
  }
  updateComponent(component){
    let id = component._id
    console.log("ID",id)
    console.log("Component",component)
    this.nodeservice.updatenode(component, result => {
        this.dref.close()
    })
  }
  closeDialog(){
    this.dref.close()
  }
  ngOnInit() {
  }
  removeComponent(component){
    this.nodeservice.removeNode(component, ()=>{
      this.cy.removeNode(component.id,()=>{
        this.dref.close()
      })
    })
  }
}
