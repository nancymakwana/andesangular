import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "src/app/productdisplay/productdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ImagedataService } from "src/app/imagedata.service";
import { product } from "src/app/productdisplay/product";
import { MatTableDataSource } from "@angular/material/table";
import { image } from "../image";

@Component({
  selector: "app-imagedetails",
  templateUrl: "./imagedetails.component.html",
  styleUrls: ["./imagedetails.component.css"]
})
export class ImagedetailsComponent implements OnInit {
  imgarr: image[] = [];
  displayedColumns: string[] = ["img1", "choose", "action"];
  dataSource = new MatTableDataSource();
  constructor(
    private _data: ImagedataService,
    private _routes: Router,
    private _act_route: ActivatedRoute
  ) {}
  pro_id: number;
  img: string;
  pro_img_id: number;
  selectedfile: File = null;
  ngOnInit() {
    this.pro_id = this._act_route.snapshot.params["pro_id"];
    this._data.getAllImage(this.pro_id).subscribe((data: image[]) => {
      this.imgarr = data;
      this.dataSource.data = this.imgarr;
      console.log(this.imgarr);
    });
  }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
    console.log(this.selectedfile);
  }

  OnEdit(item:image) {
    this.pro_img_id = item.pro_img_id;
    const fd = new FormData();
    console.log(this.pro_img_id);
    if (this.selectedfile != null) {
      fd.append("img", this.selectedfile, this.selectedfile.name);
    } else {
      fd.append("img", this.img);
    }

    // fd.append("pro_id",this.pro_id.toString());
    this._data.UpdateImage(this.pro_img_id, fd).subscribe(data => {
      console.log("yessss");
      //this._routes.navigate(["/nav/product"]);
    });
  }
  OnCancel() {
    this._routes.navigate(["/nav/product"]);
  }
  OnDelete(item:image) {
    this.pro_img_id = item.pro_img_id;
    this._data.deleteImage(this.pro_img_id).subscribe((data: product) => {
      console.log("item deleted");
      this._routes.navigate(["/nav/product"]);
    });
  }
}
