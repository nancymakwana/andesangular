import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FILE } from 'dns';
import { user } from '../userdisplay/user';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
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
selectedfile: File = null;
  type: string = "admin";
  hide = true;
  constructor(
    private _data: UserdataService,
    private _route:Router,
    private _act_route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user_id = this._act_route.snapshot.params["user_id"];
    console.log(this.user_id);
    this._data.getUserById(this.user_id).subscribe((data: user) => {
      console.log(data[0]);
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

  OnCancel() {
    this._route.navigate(["/nav"]);
  }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
    console.log(this.selectedfile);
  }
  OnEdit(f) {
    //console.log(f.value);
    localStorage.setItem('fname',f.value.fname);
    localStorage.setItem('password',f.value.password);
    localStorage.setItem('img',f.value.img);
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

    if(this.selectedfile != null) {
      fd.append("img", this.selectedfile, this.selectedfile.name);
     }
     else
     {
      fd.append("img", FileList.arguments.selectedfile, this.img);
     }
    fd.append("type", this.type);

    this._data.UpdateUser(fd, this.user_id).subscribe((data: user[]) => {
      console.log (fd);
      this._route.navigate(["/nav"]);
    });
  }
}


