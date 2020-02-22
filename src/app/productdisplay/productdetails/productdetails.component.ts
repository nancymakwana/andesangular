import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "../productdata.service";
import { ActivatedRoute, Router } from "@angular/router";
import { product } from "../product";
import { ImagedataService } from "src/app/imagedata.service";
import { image } from "src/app/image-add/image";

@Component({
  selector: "app-productdetails",
  templateUrl: "./productdetails.component.html",
  styleUrls: ["./productdetails.component.css"]
})
export class ProductdetailsComponent implements OnInit {
  pro_id: number;
  pro_name: string;
  info: string;
  size: string;
  color: string;
  rent: number;
  soh: number;
  sp_instruction: string;
  fk_cat_id: number;
  cat_name: string;
  // img1: string;
  // img2: string;
  // img3: string;
  imgarr: image[] = [];
  constructor(
    private _data: ProductdataService,
    private _act_route: ActivatedRoute,
    private _imgdata: ImagedataService,
    private _route: Router
  ) {}

  ngOnInit() {
    this.pro_id = this._act_route.snapshot.params["pro_id"];
    console.log(this.pro_id);
    this._imgdata.getAllImage(this.pro_id).subscribe((data: image[]) => {
      //console.log(data);
      this.imgarr = data;
      console.log(this.imgarr);
      if (this.imgarr.length==0) {
        alert("first add image");
        this._route.navigate(["nav/imageadd", this.pro_id]);
      } else {
        this._data.getProductById(this.pro_id).subscribe((data: product[]) => {
          this.pro_name = data[0].pro_name;
          this.info = data[0].info;
          this.size = data[0].size;
          this.color = data[0].color;
          this.rent = data[0].rent;
          this.soh = data[0].soh;
          this.sp_instruction = data[0].sp_instruction;
          this.fk_cat_id = data[0].fk_cat_id;
          this.cat_name = data[0].cat_name;
          // this.img1 = data[0].img1;
          // this.img2 = data[0].img2;
          // this.img3 = data[0].img3;
        });
      }
    });

  }
}
