import { Component, OnInit } from '@angular/core';
import { ProductdataService } from '../productdisplay/productdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagedataService } from '../imagedata.service';
import { product } from '../productdisplay/product';

@Component({
  selector: 'app-image-add',
  templateUrl: './image-add.component.html',
  styleUrls: ['./image-add.component.css']
})
export class ImageAddComponent implements OnInit {
  constructor(private _data: ImagedataService, private _routes: Router,private _act_route:ActivatedRoute) {}
pro_id:number;
pro_name: string;
  info: string;
  size: string;
  color: string;
  rent: number;
  soh: number;
  sp_instruction: string;
  fk_cat_id: number;
  cat_name: string;
  selectedfile:File=null;
  ngOnInit() {
    this.pro_id = this._act_route.snapshot.params["pro_id"];
    // this._data.getProductById(this.pro_id).subscribe((data: product[]) => {
    //   //console.log(data);
    //   this.pro_name = data[0].pro_name;
    //   this.info = data[0].info;
    //   this.size = data[0].size;
    //   this.color = data[0].color;
    //   this.rent = data[0].rent;
    //   this.soh = data[0].soh;
    //   this.sp_instruction = data[0].sp_instruction;
    //   this.fk_cat_id = data[0].fk_cat_id;
    //   this.cat_name = data[0].cat_name;
    // });
   }
  changeImg(value) {
    this.selectedfile = <File>value.target.files[0];
    console.log(this.selectedfile);
  }

  OnAdd(f) {
    console.log(f.value);
    const fd = new FormData();
    fd.append("img", this.selectedfile, this.selectedfile.name);
    this._data.addImage(fd,this.pro_id).subscribe((data: product[]) => {
      console.log(data);
      this._routes.navigate(["/nav/product"]);
    });
  }
  OnCancel() {
    this._routes.navigate(["/nav/product"]);
  }

}
