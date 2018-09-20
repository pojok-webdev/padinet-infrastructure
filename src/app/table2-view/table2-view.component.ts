import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EdgeService } from '../edge.service';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-table2-view',
  templateUrl: './table2-view.component.html',
  styleUrls: ['./table2-view.component.css']
})
export class Table2ViewComponent implements OnInit {
  dataSource : MatTableDataSource<any>
  columnDisplayed = ["name","vendor","capacity","utility","action"]
  vendors
  searchBox = ""
  constructor(
    private edge : EdgeService,
    private vendor : VendorService
  ) {
    this.edge.getedges({node_id:null}, result => {
      this.dataSource = new MatTableDataSource(result)
    })
    this.vendor.gets(result => {
      this.vendors = new MatTableDataSource(result)
    })
  }
  applyFilter(filterValue: string) {
    console.log("filtervl",filterValue)
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }
  clearSearchbox(){
    this.searchBox = ""
    this.applyFilter("")
  }
}
