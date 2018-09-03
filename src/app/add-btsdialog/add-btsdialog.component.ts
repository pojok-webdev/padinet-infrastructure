import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { PadiCytoscape } from '../../padicytoscape'
import { NodeService } from '../node.service';
@Component({
  selector: 'app-add-btsdialog',
  templateUrl: './add-btsdialog.component.html',
  styleUrls: ['./add-btsdialog.component.css']
})
export class AddBTSDialogComponent implements OnInit {
  obj = {
    id:'',
    name:'',
    nodetype:'',
    location:'',
    parent_:'',
    description:'',
    createuser:'anonymous'
  }
  constructor(
    public dref:MatDialogRef<AddBTSDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private padics: PadiCytoscape,
    private node: NodeService
  ) { }

  ngOnInit() {
  }
  saveBts(bts){
    bts.name = bts.id
    console.log("BTS_",bts)
    let obj = {data:bts}
    console.log("OBJ to save",obj)
    this.node.saveNode(bts,result => {
      this.padics.addCircle(obj,() => {
        this.dref.close()
      })
    })
  }
}
