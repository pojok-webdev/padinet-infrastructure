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
    //bts.name = bts.id
    //bts.typeCss = 'branch'
    switch(bts.nodetype){
      case '0':
        bts.class = 'ip_transit'
      break;
      case '1':
        bts.class = 'core'
      break;
      case '2':
        bts.class = 'branch'
      break;
      case '3':
        bts.class = 'bts'
      break;
      case '4':
        bts.class = 'ap'
      break;
      case '5':
        bts.class = 'client'
      break;
    }
    console.log("BTS_",bts)
    let obj = {data:bts}
    console.log("OBJ to save",obj)
    this.node.saveNode(bts,result => {
      obj.data.id = result.insertedIndex
      this.padics.addCircle(obj,() => {
        console.log("OBJ",obj)
        this.dref.close()
      })
    })
  }
}
