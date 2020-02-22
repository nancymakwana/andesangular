import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatTableDataSource,
  MatSort,
  MatDialog
} from "@angular/material";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderdataService } from "./orderdata.service";
import { orderdetails } from "./order";
import { delivery } from "../orderdelivery/delivery";

@Component({
  selector: "app-orderdisplay",
  templateUrl: "./orderdisplay.component.html",
  styleUrls: ["./orderdisplay.component.css"]
})
export class OrderdisplayComponent implements OnInit {
  orderarr: orderdetails[] = [];
  notassignorderarr: delivery[] = [];
  displayedColumns: string[] = [
    "order_id",
    "fname",
    "amount",
    "date",
    "action"
  ];
  assign_flag:boolean=true;
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  private order_delivery_id: number;
  private order_id: number;
  //private flag: number[] = [];
  constructor(
    private _data: OrderdataService,
    private _router: Router,
    public _dailog: MatDialog,
    private _act_routes: ActivatedRoute
  ) {}
  ngOnInit() {
    this.assign_flag=false;
    this._data.getAllOrder().subscribe((data: orderdetails[]) => {
      this.orderarr = data;
      // this.order_id = data[0].fk_order_id;
      //console.log(data);

      console.log(this.orderarr.length);
      for (let i = 0; i < this.orderarr.length; i++) {
        this._data
          .getDeliveryId(this.orderarr[i].order_id)
          .subscribe((data1: delivery[]) => {
           //console.log(data1.length);

            if (data1.length == 1) {
              console.log("if  ma aayu");
            } else {
              this.notassignorderarr.push(data1[0]);
            }
          // console.log(this.orderarr[i].flag);
          });
      }

      this.dataSource.data = this.orderarr;
      //console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  OnAssignClick()
  {
    this.assign_flag=false;
    this._data.getAllAssignOrder().subscribe((data: orderdetails[]) => {
      this.orderarr = data;
      this.dataSource.data = this.orderarr;
      //console.log(this.dataSource.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnAllClick(){
    this.assign_flag=false;
    this._data.getAllOrder().subscribe((data: orderdetails[]) => {
      this.orderarr = data;
      // this.order_id = data[0].fk_order_id;
      //console.log(data);
      for (let i = 0; i < this.orderarr.length; i++) {
        this._data
          .getDeliveryId(this.orderarr[i].order_id)
          .subscribe((data1: delivery[]) => {
           //console.log(data1.length);

            if (data1.length == 1) {
              console.log("if  ma aayu");
            } else {
              this.notassignorderarr.push(data1[0]);
            }
          // console.log(this.orderarr[i].flag);
          });
      }

          this.dataSource.data = this.orderarr;
          //console.log(this.dataSource.data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });

  }
  OnNotAssignClick()
  {
    //this.assign_flag=true;
    console.log(this.notassignorderarr);
    this.dataSource.data = this.notassignorderarr;
    //console.log(this.dataSource.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.notassignorderarr=[];
  }
  onAcceptClick(item) {
    console.log(item.order_id);
    this._router.navigate(["/nav/orderAssign", item.order_id]);
  }
  onviewMore(item) {
    this._router.navigate(["/nav/orderviewmore", item.order_id]);
  }
}
