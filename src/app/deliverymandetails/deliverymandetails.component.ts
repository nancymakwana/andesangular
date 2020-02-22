import { Component, OnInit } from '@angular/core';
import { DeliverymandataService } from '../deliverymandata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deliverymandetails',
  templateUrl: './deliverymandetails.component.html',
  styleUrls: ['./deliverymandetails.component.css']
})
export class DeliverymandetailsComponent implements OnInit {

  user_id: number;
  fname:string;
  user_email:string;
  password:string;
  lname:string;
  address:string;
  pincode:number;
  gender:string;
  city:string;
  mob_no:number;
img:string;
  constructor(
    private _data: DeliverymandataService,
    private _act_route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user_id = this._act_route.snapshot.params["user_id"];
    this._data.getDeliverymanById(this.user_id).subscribe((data: user) => {
      console.log(data);
      this.fname = data[0].fname;
      this.lname = data[0].lname;
      this.mob_no = data[0].mob_no;
      this.gender = data[0].gender;
      this.city = data[0].city;
      this.password = data[0].password;
      this.user_email = data[0].user_email;
      this.address = data[0].address;
      this.pincode = data[0].pincode;
      this.img=data[0].img;
    });
  }
}
