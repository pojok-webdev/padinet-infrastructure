import { Component, OnInit, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { BtsService } from '../bts.service';

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
    private btsservice : BtsService
  ) {
    this.btsservice.getbtstowers(result => {
      this.btses = result
      console.log("BTS Result",result)
    })
    this.edge = this.data.component
    this.edge.source = this.data.component.src
    this.edge.target = this.data.component.tgt
  }

  ngOnInit() {
  }

}
