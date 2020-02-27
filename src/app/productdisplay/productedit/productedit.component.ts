import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductdataService } from "../productdata.service";
import { Router, ActivatedRoute } from "@angular/router";
import { CategorydataService } from 'src/app/categorydata.service';
import { product } from '../product';
import { category } from 'src/app/category-details/category';

@Component({
  selector: "app-productedit",
  templateUrl: "./productedit.component.html",
  styleUrls: ["./productedit.component.css"]
})
export class ProducteditComponent implements OnInit {
  pro_id: number;
  fk_cat_id:number;
  categorydata:category[]=[];
  productEdit: FormGroup;
  constructor(
    private _data: ProductdataService,
    private _routes: Router,
    private _act_route: ActivatedRoute,
    private _cat:CategorydataService

  ) {}
  ngOnInit() {
    this.pro_id = this._act_route.snapshot.params["pro_id"];

    this.productEdit = new FormGroup({
      pro_name: new FormControl(null, [Validators.required]),
      info: new FormControl(null, [Validators.required]),
      size: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      rent: new FormControl(null, [Validators.required]),
      soh: new FormControl(null, [Validators.required]),
      sp_instruction: new FormControl(null, [Validators.required]),
      fk_cat_id: new FormControl(null, [Validators.required])
    });
    this._data.getProductById(this.pro_id).subscribe((data: product[]) => {
        this.fk_cat_id=data[0].fk_cat_id;
      console.log(data[0]);
      this.formDataBind(data[0]);
      //console.log(data);
    });
    this._cat.getAllCategory().subscribe(
      (data:category[])=>
      {
        console.log(data)
        this.categorydata=data;
      }
    );

  }
  formDataBind(item: product) {

    this.productEdit.patchValue({
      pro_name:item.pro_name,
      info: item.info,
      size: item.size,
      color: item.color,
      rent: item.rent,
      soh: item.soh,
      sp_instruction: item.sp_instruction,
      fk_cat_id: item.fk_cat_id
    });
  }
  OnEdit() {
    console.log(this.productEdit.value);
    this._data.UpdateProduct(this.productEdit.value,this.pro_id).subscribe(
      (data:product)=>{
        console.log(data);
        this._routes.navigate(["/nav/product"]);
      }
    );
  }
  OnCancel() {
    this._routes.navigate(["/nav/product"]);
  }
}
