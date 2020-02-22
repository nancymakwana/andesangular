import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ProductdataService } from './productdata.service';
import { Router } from '@angular/router';
import { product } from './product';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {

  proarr: product[] = [];
  displayedColumns: string[] = ["pro_name","size","soh","rent","action"];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data: ProductdataService,private _router:Router,public _dailog:MatDialog) {
  }
  ngOnInit() {
    this._data.getAllProduct().subscribe((data: product[]) => {
      this.proarr = data;
      console.log(data);
      this.dataSource.data = this.proarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnDeleteClick(item:product)
  {
    this._router.navigate(['/nav/productdelete',item.pro_id]);
  }

  OnAddClick() {
    this._router.navigate(['/nav/productadd']);
  }
  OnAddImage(obj:product)
  {
    this._router.navigate(['/nav/imageadd',obj.pro_id]);
  }
  OnImageDetails(obj:product)
  {
    this._router.navigate(['/nav/imagedetails',obj.pro_id]);
  }
  onUpdateClick(item: product) {
    this._router.navigate(["/nav/productedit", item.pro_id]);
  }
   OnViewMoreClick(item:product){
      this._router.navigate(['/nav/productviewmore',item.pro_id]);
   }

  applyFilter(filtervalue:string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
