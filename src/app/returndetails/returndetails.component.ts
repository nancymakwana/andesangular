import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeliverydataService } from '../deliverydata.service';
import { delivery } from '../orderdelivery/delivery';

@Component({
  selector: 'app-returndetails',
  templateUrl: './returndetails.component.html',
  styleUrls: ['./returndetails.component.css']
})
 export class ReturndetailsComponent implements OnInit {

  deliveryarr: delivery[] = [];
  displayedColumns: string[] = [
    "fk_order_id",
    "fk_user_id",
    "date",
    "delivery_status",
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _data: DeliverydataService,
    private _router: Router,
    public _dailog: MatDialog
 ) {}
  ngOnInit() {
    this._data.getAllOrder().subscribe((data: delivery[]) => {
      this.deliveryarr = data;
      console.log(data);
      this.dataSource.data = this.deliveryarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
}
  OnViewMoreClick(item: delivery) {
    this._router.navigate(["/nav/deliveryviewmore", item.order_delivery_id]);
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 }
