import { Component, OnInit } from '@angular/core';
import { DeliverymandataService } from 'src/app/deliverymandata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/userdisplay/user';

@Component({
  selector: 'app-deliverymandelete',
  templateUrl: './deliverymandelete.component.html',
  styleUrls: ['./deliverymandelete.component.css']
})
export class DeliverymandeleteComponent implements OnInit {

  user_id: number;
  fname: string;
  user_email: string;
  password: string;
  lname: string;
  address: string;
  pincode: number;
  gender: string;
  city: string;
  mob_no: number;
  img: string;
  userarr:user;
  constructor(
    private _data: DeliverymandataService,
    private _act_route: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    this.user_id = this._act_route.snapshot.params["user_id"];
    console.log(this.user_id);
    this._data.getDeliverymanById(this.user_id).subscribe((data: user) => {
      console.log(data);
      this.user_id=data[0].user_id;
      this.fname = data[0].fname;
      this.lname = data[0].lname;
      this.mob_no = data[0].mob_no;
      this.gender = data[0].gender;
      this.city = data[0].city;
      this.password = data[0].password;
      this.user_email = data[0].user_email;
      this.address = data[0].address;
      this.pincode = data[0].pincode;
      this.img = data[0].img;
console.log(this.img);
    });
  }
  OnDeleteClick() {
            if (confirm("do you want to delete?")) {
      this._data.deleteDeliveryman(this.user_id).subscribe((data: any) => {
        console.log(data);
        this._router.navigate(["/nav/deliveryman"]);
      });
    }
  }
  OnCancel() {
    this._router.navigate(["/nav/deliveryman"]);
  }
}
