import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PadiCytoscape } from '../../padicytoscape'
@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  @ViewChild('cy') div :ElementRef
  constructor(private cy:PadiCytoscape) {
  }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.log('DIV',this.div.nativeElement)
    this.cy.drawCircle(this.div.nativeElement)
  }
}
