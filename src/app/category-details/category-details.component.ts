import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CategorydataService } from '../categorydata.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {

cat_id:number;
  catarr: user[] = [];
  displayedColumns: string[] = ["cat_name","action"];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data:CategorydataService,private _router:Router,public _dailog:MatDialog,public _act_routes:ActivatedRoute) {
  }
  ngOnInit() {
    this._data.getAllCategory().subscribe((data: user[]) => {
      this.catarr = data;
      this.dataSource.data = this.catarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnDeleteClick(item:category)
  {
    this._router.navigate(['/nav/categorydelete',item.cat_id]);
  }

  OnAddClick() {
    this._router.navigate(['/nav/categoryadd']);
  }


  onUpdateClick(item) {
    this._router.navigate(['/nav/categoryedit',item.cat_id]);
  }

  applyFilter(filtervalue:string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
