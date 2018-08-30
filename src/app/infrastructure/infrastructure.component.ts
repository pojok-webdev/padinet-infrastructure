import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape'
import { MatDialog  } from '@angular/material';
import { AddBTSDialogComponent } from '../add-btsdialog/add-btsdialog.component';
import { AddLinkDialogComponent } from '../add-link-dialog/add-link-dialog.component';
@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  @ViewChild('cy') div :ElementRef
  constructor(
    private cy:PadiCytoscape,
    private dialog:MatDialog,
  ) {
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log('DIV',this.div.nativeElement)
    this.cy.drawCircle(this.div.nativeElement)
  }
  addBTS(){
    this.dialog.open(AddBTSDialogComponent,{
      width:'500px',
      data:{
        title:'Add BTS'
      }
    })
    .afterClosed()
    .subscribe(
      data => {
        //
      }
    )
  }
  addLink(){
    this.dialog.open(AddLinkDialogComponent,{
      width:'500px',
      data:{
        title:'Add Link'
      }
    })
    .afterClosed()
    .subscribe(
      data => {}
    )
  }
  removeLink(){
    this.cy.removeEdge()
  }
  removeNode(){
    this.cy.removeNode()
  }
}
