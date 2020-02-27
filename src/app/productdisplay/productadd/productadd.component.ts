import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductdataService } from "../productdata.service";
import { Router } from "@angular/router";
import { validateHorizontalPosition } from "@angular/cdk/overlay";
import { product } from "../product";
import { CategorydataService } from "src/app/categorydata.service";
import { category } from 'src/app/category-details/category';

@Component({
  selector: "app-productadd",
  templateUrl: "./productadd.component.html",
  styleUrls: ["./productadd.component.css"]
})
export class ProductaddComponent implements OnInit {
  productadd: FormGroup;
  constructor(
    private _data: ProductdataService,
    private _routes: Router,
    private _cat: CategorydataService
  ) {}
  disableSelect = new FormControl(false);
  selectedfile: File = null;
  categorydata: category[] = [];
  proarr: product[] = [];
  ngOnInit() {
    this.productadd = new FormGroup({
      pro_name: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      rent: new FormControl(null, [Validators.required]),
      soh: new FormControl(null, [Validators.required]),
      // img1: new FormControl(null, [Validators.required]),
      // img2: new FormControl(null, [Validators.required]),
      // img3: new FormControl(null, [Validators.required]),
      sp_instruction: new FormControl(null, [Validators.required]),
      fk_cat_id: new FormControl(null, [Validators.required])
    });
    this._cat.getAllCategory().subscribe((data: category[]) => {
      console.log(data);
      this.categorydata = data;
    });
  }
  // changeImg(value) {
  //   this.selectedfile = <File>value.target.files[0];
  // }
  formDataBind(item: product) {
    this.productadd.patchValue({
      pro_name: item.pro_name,
      info: item.info,
      size: item.size,
      color: item.color,
      rent: item.rent,
      soh: item.soh,
      sp_instruction: item.sp_instruction,
      fk_cat_id: item.fk_cat_id
    });
  }
  OnAdd() {
    this._data
      .addProduct(this.productadd.value)
      .subscribe((data: product[]) => {
        // console.log(this.productadd.value);
        this.proarr = this.productadd.value;
        console.log(this.proarr);
        alert("added");
        //this._routes.navigate(["/nav/product"]);
      });
  }
  onsameadd() {
    console.log(this.proarr);
    this.productadd = new FormGroup({
      pro_name: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      rent: new FormControl(null, [Validators.required]),
      soh: new FormControl(null, [Validators.required]),
      // img1: new FormControl(null, [Validators.required]),
      // img2: new FormControl(null, [Validators.required]),
      // img3: new FormControl(null, [Validators.required]),
      sp_instruction: new FormControl(null, [Validators.required]),
      fk_cat_id: new FormControl(null, [Validators.required])
    });
    this._cat.getAllCategory().subscribe((data: category[]) => {
      console.log(data);
      this.categorydata = data;
    });
  }
  OnCancel() {
    this._routes.navigate(["/nav/product"]);
  }
}
