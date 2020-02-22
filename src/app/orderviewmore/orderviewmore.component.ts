import { Component, OnInit } from "@angular/core";
import { orderdetails } from "../orderdisplay/order";
import { Router, ActivatedRoute } from "@angular/router";
import { DeliverymandataService } from "../deliverymandata.service";
import { OrderdataService } from "../orderdisplay/orderdata.service";
import { delivery } from "../orderdelivery/delivery";

@Component({
  selector: "app-orderviewmore",
  templateUrl: "./orderviewmore.component.html",
  styleUrls: ["./orderviewmore.component.css"]
})
export class OrderviewmoreComponent implements OnInit {
  public order_details_id: number;
  public sp_instruction: string;
  public order_id: number;
  public amount: number;
  public date: string;
  public deposite: number;
  public payment_method: number;
  public pro_name: string;
  public rent: number;
  public info: string;
  public size: string;
  public color: string;
  public user_email: string;
  public fname: string;
  public lname: string;
  public address: string;
  public city: string;
  public pincode: number;
  public mob_no: string;
  public gender: string;
  public deliverymandata: string;
  public orderarr: orderdetails[] = [];
  total:number=0;
  constructor(
    private _data: OrderdataService,
    private _act_route: ActivatedRoute,
    private _dmandata: DeliverymandataService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.order_id = this._act_route.snapshot.params["order_id"];
    console.log(this.order_id);
    this._data.getOrderById(this.order_id).subscribe((data: orderdetails[]) => {
      console.log(data);
      this.fname = data[0].fname;
      this.lname = data[0].lname;
      this.mob_no = data[0].mob_no;
      this.gender = data[0].gender;
      this.city = data[0].city;
      this.user_email = data[0].user_email;
      this.address = data[0].address;
      this.pincode = data[0].pincode;
      this.orderarr = data;
      //user side calculate thai ne amount vala var ma store thse j order tbl ma che etle pchi html ma total ni jgya e amount j print kravani che.
      for(let i=0;i<this.orderarr.length;i++)
      {
        this.total+=this.orderarr[i].rent+this.orderarr[i].deposite;
        console.log(this.total);
      }
    });
    this._data.getDeliveryId(this.order_id).subscribe((data: delivery) => {
      console.log(data);
      this.deliverymandata = data[0].fname;
    });
  }
}
