import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UserdataService } from "../userdata.service";
import { user } from '../user';

@Component({
  selector: "app-useredit",
  templateUrl: "./useredit.component.html",
  styleUrls: ["./useredit.component.css"]
})
export class UsereditComponent implements OnInit {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
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

  selectedfile: File = null;
  type: string = "customer";
  hide = true;
  //gender:string="";
  constructor(
    private _route: Router,
    private _data: UserdataService,
    private _act_routes: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user_id = this._act_routes.snapshot.params["user_id"];
    this._data.getUserById(this.user_id).subscribe((data: user) => {
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
      this.img = data[0].img;
      });
      console.log(this.gender);

  }

  OnCancel() {
    this._route.navigate(["/nav"]);
  }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
    console.log(this.selectedfile);
  }
  OnEdit(f) {
    //console.log(f.value)
    const fd = new FormData();
    console.log(f.value);
    fd.append("user_email", f.value.user_email);
    fd.append("password", f.value.password);
    fd.append("fname", f.value.fname);
    fd.append("lname", f.value.lname);
    fd.append("address", f.value.address);
    fd.append("city", f.value.city);
    fd.append("pincode", f.value.pincode);
    fd.append("mob_no", f.value.mob_no);
    fd.append("gender", f.value.gender);

    //if(this.selectedfile != null) {
      fd.append("img", this.selectedfile, this.selectedfile.name);
    // }
    // else
    // {
    //   fd.append("img", "", this.img);
    // }
    fd.append("type", this.type);

    this._data.UpdateUser(fd, this.user_id).subscribe((data: user[]) => {
      console.log (fd);
      this._route.navigate(["/nav"]);
    });
  }
}
