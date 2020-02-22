import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategorydataService } from 'src/app/categorydata.service';

@Component({
  selector: 'app-categorydelete',
  templateUrl: './categorydelete.component.html',
  styleUrls: ['./categorydelete.component.css']
})
export class CategorydeleteComponent implements OnInit {


  cat_id:number;
  cat_name:string;
  constructor(public _act_routes:ActivatedRoute,public _router:Router,public _data:CategorydataService) { }

  ngOnInit() {
    this.cat_id = this._act_routes.snapshot.params["cat_id"];
    this._data.getCategoryById(this.cat_id).subscribe(
      (data:category)=>
      {
        this.cat_name=data[0].cat_name;
      }
    );
  }
  onDeleteClick(item) {


  this._data.deleteCategory(this.cat_id).subscribe(
    (data:category[])=>
    {console.log(data);
      this._router.navigate(['/nav/category']);
  }
  );
}
OnCancel()
{
  this._router.navigate(['\nav\category']);
}
}
