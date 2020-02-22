import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Router } from "@angular/router";
import {
  MatDialogRef,
  MatDialogClose,
  MatDialogContainer,
  MatDialog
} from "@angular/material";

import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { ProfileconfirmComponent } from '../profileconfirm/profileconfirm.component';

@Component({
  selector: "app-usermenu",
  templateUrl: "./usermenu.component.html",
  styleUrls: ["./usermenu.component.css"]
})
export class UsermenuComponent implements OnInit {
  fname: string;
  img: string;
  ngOnInit() {
    this.fname = localStorage.getItem("fname");
    this.img = localStorage.getItem("img");
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _routes: Router,
    private _dialog: MatDialog
  ) {}
  onLogOut() {
    this._routes.navigate([""]);
    localStorage.clear();
  }
  onprofileClick(str){
    localStorage.setItem('link',str);
    const dialogRef = this._dialog.open(ProfileconfirmComponent, {
      width: '250px'});
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
  onClick(str) {
localStorage.setItem('link',str);
console.log(localStorage.getItem('link'));
    const dialogRef = this._dialog.open(ConfirmationComponent, {
      width: '250px'});
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }
}
