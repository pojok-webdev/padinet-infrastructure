import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { PadiCytoscape } from '../../padicytoscape'
@Component({
  selector: 'app-add-btsdialog',
  templateUrl: './add-btsdialog.component.html',
  styleUrls: ['./add-btsdialog.component.css']
})
export class AddBTSDialogComponent implements OnInit {
  obj = {
    id:'',
    location:'',
    parent_:''
  }
  constructor(
    public dref:MatDialogRef<AddBTSDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private padics: PadiCytoscape
  ) { }

  ngOnInit() {
  }
  saveBts(bts){
    console.log("BTS_",bts)
    let link = {
      id:'x',
      source:'IP_Transit',
      target:'Sucofindo' 
    }
    console.log("Link",link)
    let obj = {data:bts}
    this.padics.addCircle(obj,()=>{
      this.padics.addEdge(link,()=>{
        
      })
    })
    
    this.dref.close()
  }
}
