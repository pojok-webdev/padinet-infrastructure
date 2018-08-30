import { Component, OnInit } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape';

@Component({
  selector: 'app-add-link-dialog',
  templateUrl: './add-link-dialog.component.html',
  styleUrls: ['./add-link-dialog.component.css']
})
export class AddLinkDialogComponent implements OnInit {

  constructor(private padiCS:PadiCytoscape) { }
  edge = {
    id:'',source:'',target:''
  }
  ngOnInit() {
  }
  saveEdge(edge){
    let obj = {data:edge}
    this.padiCS.addEdge(obj,() => {})
  }
}
