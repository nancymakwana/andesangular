import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryaddComponent } from '../categoryadd/categoryadd.component';
import { CategorydataService } from 'src/app/categorydata.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.css']
})
export class CategoryeditComponent implements OnInit {

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
  onUpdateClick(item) {


  this._data.UpdateCategory(this.cat_id,item.value).subscribe(
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
