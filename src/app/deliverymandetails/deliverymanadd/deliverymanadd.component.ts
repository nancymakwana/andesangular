import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DeliverymandataService } from "src/app/deliverymandata.service";

@Component({
  selector: "app-deliverymanadd",
  templateUrl: "./deliverymanadd.component.html",
  styleUrls: ["./deliverymanadd.component.css"]
})
export class DeliverymanaddComponent implements OnInit {
  // emailFormControl = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
  // ]);
  selectedfile: File = null;
  type: string = "deliveryman";
  hide = true;
  //gender:string="";
  constructor(private _route: Router, private _data: DeliverymandataService) {}
  ngOnInit() {}

  OnAdd(f) {
    alert("add clicxk");
    console.log(f.value.user_email);
    const fd = new FormData();
    fd.append("user_email", f.value.user_email);
    fd.append("password", f.value.password);
    fd.append("fname", f.value.fname);
    fd.append("lname", f.value.lname);
    fd.append("address", f.value.address);
    fd.append("city", f.value.city);
    fd.append("pincode", f.value.pincode);
    fd.append("mob_no", f.value.mob_no.toString());
    fd.append("gender", "male");
    fd.append("img", this.selectedfile, this.selectedfile.name);
    fd.append("type", this.type);
    this._data.addDeliveryman(fd).subscribe((data: user) => {
      console.log(data);
      this._route.navigate(["/nav/deliveryman"]);
    });
  }
  OnCancel() {
    this._route.navigate(["/nav/deliveryman"]);
  }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
  }
}
