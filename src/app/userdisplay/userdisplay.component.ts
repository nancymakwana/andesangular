import { Component, OnInit, ViewChild } from "@angular/core";
import { UserdataService } from "./userdata.service";
import { MatTableDataSource, MatSort, MatPaginator, MatDialogRef, MatDialog } from "@angular/material";
import { Router } from '@angular/router';
import { UserMoreDetailsComponent } from './user-more-details/user-more-details.component';

@Component({
  selector: "app-userdisplay",
  templateUrl: "./userdisplay.component.html",
  styleUrls: ["./userdisplay.component.css"]
})
export class UserdisplayComponent implements OnInit {
userarr: user[] = [];
  displayedColumns: string[] = ["fname", "user_email", "city","action"];
  dataSource=new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data: UserdataService,private _router:Router,public _dailog:MatDialog) {
  }
  ngOnInit() {
    this._data.getAllUser().subscribe((data: user[]) => {
      this.userarr = data;
      console.log(data);
      this.dataSource.data = this.userarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnDeleteClick(item:user)
  {
    this._router.navigate(['/nav/userdelete',item.user_id]);
  }

  OnAddClick() {
    this._router.navigate(['/nav/useradd']);
  }


  onUpdateClick(item: user) {
    this._router.navigate(["/nav/useredit", item.user_id]);
  }
   OnViewMoreClick(item:user){
      this._router.navigate(['/nav/userviewmore',item.user_id]);
      console.log(item.user_id);
   }

  applyFilter(filtervalue:string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
