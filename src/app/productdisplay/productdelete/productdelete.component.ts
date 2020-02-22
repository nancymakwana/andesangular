import { Component, OnInit } from "@angular/core";
import { ProductdataService } from "../productdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { product } from "../product";

@Component({
  selector: "app-productdelete",
  templateUrl: "./productdelete.component.html",
  styleUrls: ["./productdelete.component.css"]
})
export class ProductdeleteComponent implements OnInit {
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
  constructor(
    private _data: ProductdataService,
    private _routes: Router,
    private _act_route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.pro_id = this._act_route.snapshot.params["pro_id"];
    this._data.getProductById(this.pro_id).subscribe((data: product[]) => {
      console.log(data);

      this.pro_name = data[0].pro_name;
      this.info = data[0].info;
      this.size = data[0].size;
      this.color = data[0].color;
      this.rent = data[0].rent;
      this.soh = data[0].soh;
      this.sp_instruction = data[0].sp_instruction;
      this.fk_cat_id = data[0].fk_cat_id;
      this.cat_name = data[0].cat_name;
    });
  }
  onDeleteClick() {
    this._data.deleteProduct(this.pro_id).subscribe((data: product[]) => {
      console.log(data);
      this._routes.navigate(["/nav/product"]);
    });
  }
  OnCancel() {
    this._routes.navigate(["/nav/product"]);
  }
}
