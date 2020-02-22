import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
// emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  selectedfile: File = null;
  type: string = "customer";
  hide = true;
  //gender:string="";
  constructor(private _route: Router, private _data: UserdataService) {}
  ngOnInit() {}
  OnAdd(f) {
    alert("add clicxk");
    console.log(f.value);
    const fd = new FormData();
    fd.append("user_email", f.value.user_email);
    fd.append("password", f.value.password);
    fd.append("fname", f.value.fname);
    fd.append("lname", f.value.lname);
    fd.append("address", f.value.address);
    fd.append("city", f.value.city);
    fd.append("pincode", f.value.pincode);
    fd.append("mob_no", f.value.mob_no.toString());
    fd.append("gender",f.value.gender);
    fd.append("img", this.selectedfile, this.selectedfile.name);
    fd.append("type", this.type);
    this._data.addUser(fd).subscribe((data: user) => {
      console.log(data);
      this._route.navigate(["/nav"]);
    });
  }
  OnCancel() {
    this._route.navigate(["/nav"]);
  }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
  }

}
