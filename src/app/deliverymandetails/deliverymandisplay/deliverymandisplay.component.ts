import { OnInit, ViewChild, Component } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { DeliverymandataService } from 'src/app/deliverymandata.service';
import { user } from 'src/app/userdisplay/user';

@Component({
  selector: 'app-deliverymandisplay',
  templateUrl: './deliverymandisplay.component.html',
  styleUrls: ['./deliverymandisplay.component.css']
})
export class DeliverymandisplayComponent implements OnInit {
  userarr: user[] = [];
  displayedColumns: string[] = ['fname', 'user_email', 'city','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _data: DeliverymandataService, private _router: Router, public _dailog: MatDialog) {
  }
  ngOnInit() {
    this._data.getAllDeliveryman().subscribe((data: user[]) => {
      this.userarr = data;
      console.log(data);
      this.dataSource.data = this.userarr;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  OnDeleteClick(item: user) {
    // let position = this.userarr.indexOf(item);
    // if (confirm("do you want to delete?")) {
    //   this._data.deleteDeliveryman(item.user_id).subscribe((data: any) => {
    //     console.log(data);
    //     this.userarr.splice(position,1);
    //   });
    // }

    this._router.navigate(['/nav/deliverymandelete', item.user_id]);
  }
  OnAddClick() {
    this._router.navigate(['/nav/deliverymanadd']);
  }


  onUpdateClick(item: user) {
    this._router.navigate(['/nav/deliverymanedit', item.user_id]);
  }
   OnViewMoreClick(item: user) {
      this._router.navigate(['/nav/deliverymanviewmore', item.user_id]);
      console.log(item.user_id);
   }

  applyFilter(filtervalue: string) {
    this.dataSource.filter = filtervalue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
