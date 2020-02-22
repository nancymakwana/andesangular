import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategorydataService } from "src/app/categorydata.service";

@Component({
  selector: "app-categoryadd",
  templateUrl: "./categoryadd.component.html",
  styleUrls: ["./categoryadd.component.css"]
})
export class CategoryaddComponent implements OnInit {
  hide = true;
  constructor(private _route: Router, private _data: CategorydataService) {}
  ngOnInit() {}

  OnAdd(f) {
    alert("add click");
    // const fd = new FormData();
    console.log(f.value);
    // fd.append("cat_name",f.value.cat_name);
    // console.log(fd.get('cat_name'));
    this._data.addCategory(f.value).subscribe(
      (data:category)=>

      {
        console.log(data)
        //alert("added"+data.cat_name);
        this._route.navigate(["/nav/category"]);
      }
    );
  }
  OnCancel() {
    this._route.navigate(["/nav/category"]);
  }
}
