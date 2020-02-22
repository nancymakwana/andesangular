import { Component, OnInit, ViewChild } from '@angular/core';
import { delivery } from './delivery';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DeliverydataService } from '../deliverydata.service';
import { orderdetails } from '../orderdisplay/order';


@Component({
  selector: 'app-orderdelivery',
  templateUrl: './orderdelivery.component.html',
  styleUrls: ['./orderdelivery.component.css']
})
export class OrderdeliveryComponent implements OnInit {

  deliveryarr: orderdetails[] = [];
  displayedColumns: string[] = [
    "pro_name",
    "fname",
    "date",
    "delivery_status",
    "Action"
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
    this._data.getAllOrder().subscribe((data: orderdetails[]) => {
      this.deliveryarr = data;
      console.log(data);
      console.log(this.deliveryarr);
      this.dataSource.data = this.deliveryarr;
      console.log(this.dataSource.data);
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
