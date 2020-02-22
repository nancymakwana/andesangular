import { Component, OnInit } from "@angular/core";
import { OrderdataService } from "../orderdata.service";
import { ActivatedRoute, Router } from "@angular/router";
import { orderdetails } from "../order";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DeliverymandataService } from "src/app/deliverymandata.service";
import { delivery } from "src/app/orderdelivery/delivery";

@Component({
  selector: "app-orderAssign",
  templateUrl: "./orderAssign.component.html",
  styleUrls: ["./orderAssign.component.css"]
})
export class OrderdetailsComponent implements OnInit {
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
  public deliverymandata: user[] = [];
  public DeliveryAssign: FormGroup;
  public orderarr: orderdetails[] = [];
  constructor(
    private _data: OrderdataService,
    private _act_route: ActivatedRoute,
    private _dmandata: DeliverymandataService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.DeliveryAssign = new FormGroup({
      dm_user_id: new FormControl(null, [Validators.required])
    });
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
    });
    this._dmandata.getAllDeliveryman().subscribe((data: user[]) => {
      console.log(data);
      this.deliverymandata = data;
    });
  }
  formDataBind(item: delivery) {
    this.DeliveryAssign.patchValue({
      dm_user_id: item.dm_user_id
    });
  }

  onAssign() {
    console.log(this.DeliveryAssign.value);
    this._data
      .AddDelivery(this.order_id, this.DeliveryAssign.value)
      .subscribe((data: delivery) => {
        console.log("added");
        this._route.navigate(['/nav/order']);
      });
  }
  OnCancel() {
    this._route.navigate(["/nav/order"]);
  }
}
